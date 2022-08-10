const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const User = require("./models/User.js");
const Contest = require("./models/Contest.js");

const connectionurl =
  "mongodb+srv://admin:admin@cluster0.0odqg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionurl);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    codeforces_handle: req.body.codeforces_handle,
    phone: req.body.phone,
  });

  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "EMAIL already exists!",
      });
    }
    return res.status(200).json({
      title: "User Created",
    });
  });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err)
      return res.status(500).json({
        title: "Error",
        error: err,
      });
    if (!user) {
      return res.status(400).json({
        title: "User not found",
        error: "Invalid Username or Password",
      });
    }
    if (req.body.password != user.password) {
      return res.status(401).json({
        title: "Login Failed",
        error: "Invalid Username or Password",
      });
    }

    let token = jwt.sign({ userId: user._id }, "secretkey");
    return res.status(200).json({
      title: "Login Successful",
      token: token,
      name: user.name,
    });
  });
});

app.get("/profile", (req, res) => {
  jwt.verify(req.headers.token, "secretkey", (err, dec) => {
    if (err) {
      return res.status(401).json({
        title: "Not Authorized, Please Login Again",
        error: err,
      });
    }

    User.findOne({ _id: dec.userId }, (err, user) => {
      if (err)
        return res.status(400).json({
          title: "Error",
          error: err,
        });

      return res.status(200).json({
        title: "Success",
        points: user.total_points,
        history: user.history,
        username: user.codeforces_handle,
        name: user.name,
      });
    });
  });
});

app.post("/contest", (req, res) => {
  const newContest = new Contest({
    contest: req.body.contest,
    date: req.body.date,
    name: req.body.name,
    desc: req.body.desc
  });

  newContest.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "CONTEST already exists!",
      });
    }
    return res.status(200).json({
      title: "Contest Created",
    });
  });
});

app.post("/updatePoints", (req, res)=>{
  base_url = `https://codeforces.com/api/contest.standings?contestId=${req.body.contest}&from=1&count=10`;
  axios
    .get(base_url)
    .then((data) => {
      data.data.result.rows.forEach((row) => {
        User.findOneAndUpdate(
          { codeforces_handle: row.party.members[0].handle },
          {
            $inc: { total_points: (11 - row.rank) * 10 },
            $push: {
              history: {
                date: date_obj.toISOString(),
                points: (11 - row.rank) * 10,
              },
            },
          },
          (err, data) => {
            if (err)
              return res.status(400).json({
                title: "Error",
                error: err,
              });
          }
        );
      });
      return res.status(200).json({
        title: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/profile", (req, res) => {
  User.findOne({ _id: dec.userId }, (err, user) => {
    if (err)
      return res.status(400).json({
        title: "Error",
        error: err,
      });

    return res.status(200).json({
      title: "Success",
      points: user.total_points,
      history: user.history,
      username: user.codeforces_handle,
      name: user.name,
    });
  });
});

app.get("/leaderboard", (req, res) => {
  User.find(
    {},
    null,
    { sort: { total_points: "desc" }, limit: 10 },
    (err, users) => {
      if (err)
        return res.status(400).json({
          title: "Error",
          error: err,
        });
      const calUsers = [];
      users.forEach((user) => {
        const calUser = {
          points: user.total_points,
          username: user.codeforces_handle,
          name: user.name,
        };
        calUsers.push(calUser);
      });
      return res.status(200).json({
        title: "Success",
        users: calUsers
      });
    }
  );
});

app.get("/contests", (req, res) => {
  Contest.find(
    {},
    (err, contests) => {
      if (err)
        return res.status(400).json({
          title: "Error",
          error: err,
        });
      return res.status(200).json({
        title: "Success",
        contests: contests
      });
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`P-Club app listening on port ${PORT}`);
});
