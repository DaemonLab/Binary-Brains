const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const config = require("./config");
const nodemailer = require("./nodemailer.config");
const bcrypt = require("bcryptjs");

const User = require("./models/User.js");
const Contest = require("./models/Contest.js");
const Notes = require("./models/Notes.js");
const DailyProblem = require("./models/DailyProblem.js");
const Items = require("./models/Items");

const connectionurl =
  "mongodb+srv://admin:admin@cluster0.oumfbze.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionurl);

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/register", (req, res) => {
  const token = jwt.sign({ email: req.body.email }, config.secret);
  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: passwordHash,
    codeforces_handle: req.body.codeforces_handle,
    phone: req.body.phone,
    difficulty: req.body.difficulty,
    confirmationCode: token,
  });
  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "Email already exists!",
      });
    }
    nodemailer.sendConfirmationEmail(
      newUser.name,
      newUser.email,
      newUser.confirmationCode
    );
    return res.status(200).json({
      title: "User Created",
    });
  });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    console.log(user);
    if (err) {
      return res.status(500).json({
        title: "error",
        error: "Something went wrong. Please try again!",
      });
    }
    if (!user) {
      return res.status(400).json({
        title: "error",
        error: "Invalid Username or Password",
      });
    }
    if (user.status != "Active") {
      return res.status(401).json({
        title: "error",
        error: "Pending Account. Please Verify Your Email!",
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: "error",
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

app.post("/confirm", (req, res) => {
  User.findOne({ confirmationCode: req.body.code }, (err, user) => {
    if (!user) {
      return res.status(400).json({
        title: "error",
        error: "Invalid Code",
      });
    }
    user.status = "Active";
    user.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return res.status(401).json({
          title: "error",
          error: "Not Authorized, Please Login Again",
        });
      }
      return res.status(200).json({
        title: "Success",
      });
    });
    if (err) {
      res.status(500).send({ message: err });
      return res.status(401).json({
        title: "error",
        error: "Not Authorized, Please Login Again",
      });
    }
  });
});

app.get("/profile", (req, res) => {
  jwt.verify(req.headers.token, "secretkey", (err, dec) => {
    if (err) {
      return res.status(401).json({
        title: "error",
        error: "Not Authorized, Please Login Again",
      });
    }

    User.findOne({ _id: dec.userId }, (err, user) => {
      if (err)
        return res.status(400).json({
          title: "error",
          error: "Something went wrong. Please try again!",
        });

      return res.status(200).json({
        title: "Success",
        points: user.total_points,
        history: user.history,
        username: user.codeforces_handle,
        name: user.name,
        difficulty: user.difficulty,
      });
    });
  });
});

app.post("/contest", (req, res) => {
  const newContest = new Contest({
    contest: req.body.contest,
    date: req.body.date,
    name: req.body.name,
    desc: req.body.desc,
    category: req.body.category,
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

app.post("/dailyproblem", (req, res) => {
  const newDailyProblem = new DailyProblem({
    link: req.body.link,
    date: req.body.date,
    name: req.body.name,
    desc: req.body.desc,
    category: req.body.category,
  });

  newDailyProblem.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "Daily Problem already exists!",
      });
    }
    return res.status(200).json({
      title: "Daily Problem Created",
    });
  });
});

app.post("/notes", (req, res) => {
  const newNotes = new Notes({
    name: req.body.name,
    date: req.body.date,
    category: req.body.category,
    link: req.body.link,
  });

  newNotes.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "Notes already exists!",
      });
    }
    return res.status(200).json({
      title: "Notes Created",
    });
  });
});

app.post("/updatedaily", (req, res) => {
  User.find({ difficulty: req.body.difficulty }, (err, users) => {
    users.map((user) => {
      daily_url = `https://codeforces.com/api/user.status?handle=${user.codeforces_handle}`;
      axios.get(daily_url).then((data) => {
        data.data.result.forEach((prblm) => {
          if (prblm.id === req.body.id && prblm.verdict === "OK") {
            User.findOneAndUpdate(
              { codeforces_handle: req.body.codeforces_handle },
              {
                $inc: { total_points: 10 },
                $push: {
                  history: {
                    date: date_obj.toISOString(),
                    points: 10,
                  },
                },
              },
              (err, data) => {
                if (err)
                  return res.status(400).json({
                    title: "error",
                    error: "Something went wrong. Please try again!",
                  });
              }
            );
          }
        });
      });
    });
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "Something went wrong. Please try again!",
      });
    }
  });
  return res.status(200).json({
    title: "Success",
  });
});

app.post("/updatePoints", (req, res) => {
  base_url = `https://codeforces.com/api/contest.standings?contestId=${req.body.contest}&from=1`;
  axios
    .get(base_url)
    .then((data) => {
      data.data.result.rows.forEach((row) => {
        const pointsInc = 0;
        switch (true) {
          case row.rank == 1:
            pointsInc = 1000;
            break;
          case row.rank == 2:
            pointsInc = 800;
            break;
          case row.rank == 3:
            pointsInc = 600;
            break;
          case row.rank == 4 || row.rank == 5:
            pointsInc = 400;
            break;
          case row.rank > 5 && row.rank <= 10:
            pointsInc = 150;
            break;
          case row.rank > 10 && row.rank <= 20:
            pointsInc = 70;
            break;
          case row.rank > 20 && row.rank <= 40:
            pointsInc = 30;
            break;
          case row.rank > 40 && row.points > 0:
            pointsInc = 10;
            break;
          default:
            pointsInc = 0;
        }
        User.findOneAndUpdate(
          { codeforces_handle: row.party.members[0].handle },
          {
            $inc: { total_points: pointInc },
            $push: {
              history: {
                date: date_obj.toISOString(),
                points: pointInc,
              },
            },
          },
          (err, data) => {
            if (err)
              return res.status(400).json({
                title: "error",
                error: "Something went wrong. Please try again!",
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
      return res.status(400).json({
        title: "error",
        error: "Something went wrong. Please try again!",
      });
    });
});

app.get("/profile", (req, res) => {
  User.findOne({ _id: dec.userId }, (err, user) => {
    if (err)
      return res.status(400).json({
        title: "error",
        error: "Not Authorized., Please Login Again!",
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

app.get("/leaderboard", async (req, res) => {
  const beginnerUsers = await User.find({ difficulty: "beginner" }, null, {
    sort: { total_points: "desc" },
    limit: 5,
  });
  const advancedUsers = await User.find({ difficulty: "advanced" }, null, {
    sort: { total_points: "desc" },
    limit: 5,
  });
  return res.status(200).json({
    title: "Success",
    beginnerUsers: beginnerUsers,
    advancedUsers: advancedUsers,
  });
});

app.get("/contests", (req, res) => {
  Contest.find({}, (err, contests) => {
    if (err)
      return res.status(400).json({
        title: "error",
        error: "Something went wrong, Please try again!",
      });
    return res.status(200).json({
      title: "Success",
      contests: contests,
    });
  });
});

app.post("/getnotes", (req, res) => {
  Notes.find({ category: req.body.category }, (err, notes) => {
    if (err)
      return res.status(400).json({
        title: "error",
        error: "Something went wrong, Please try again!",
      });
    return res.status(200).json({
      title: "Success",
      notes: notes,
    });
  });
});

app.post("/getdailyproblem", (req, res) => {
  DailyProblem.find({ category: req.body.category }, (err, dailyproblems) => {
    if (err)
      return res.status(400).json({
        title: "error",
        error: "Something went wrong, Please try again!",
      });
    return res.status(200).json({
      title: "Success",
      dailyproblems: dailyproblems,
    });
  });
});

app.post("/:id/:itemId/add", async (req, res) => {
  const { id, itemId } = req.params;
  const user = await User.findById(id).populate("items");
  const item = await Items.findById(id);
  let totalPrice = 0;
  user.item.forEach((item) => {
    totalPrice += item.itemPrice;
  });
  if (totalPrice + item.itemPrice > user.total_points) {
    return res.status(400).json({
      title: "error",
      error: "Not enough points!",
    });
  } else {
    User.updateOne(
      { _id: id },
      {
        $push: { items: new ObjectId(itemId) },
        $inc: { total_points: -item.itemPrice },
      }
    );
  }
  user.save();
});

app.delete("/:id/:itemId/delete", (req, res) => {
  const { id, itemId } = req.params;
  const user = User.findById(id).populate("items");
  const item = Items.findById(id);
  if (user.items.includes(item)) {
    User.updateOne(
      { _id: id },
      {
        $pull: { items: item },
        $inc: { total_points: item.itemPrice },
      }
    );
  }
  user.save();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`P-Club app listening on port ${PORT}`);
});
