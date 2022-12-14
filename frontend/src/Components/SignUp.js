import React from "react";
import "./Style2.css";
import { Link } from "react-router-dom";
import Footer2 from "./Footer2";
import axios from "axios";

function SignUp() {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/yourprofile";
  }
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [difficulty, setDifficulty] = React.useState("beginner");
  const [alert, setAlert] = React.useState("none");
  const [success, setSuccess] = React.useState("none");
  const [alertmsg, setAlertMsg] = React.useState(
    "Something went wrong! Please Try Again!"
  );
  const [passerr, setPasserr] = React.useState("");
  const handleRegister = () => {
    axios
      .post("https://p-club-iiti-cp.herokuapp.com/register", {
        name: name,
        email: email,
        password: password,
        phone: phone,
        codeforces_handle: username,
        difficulty: difficulty,
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess("block");
        } else {
          console.log("failed");
          setAlert("block");
          setAlertMsg(res.data.error);
        }
      })
      .catch((err) => {
        setAlert("block");
        setAlertMsg(err.response.data.error);
      });
  };

  React.useEffect(() => {
    if (password === confirmPassword) setDisabled(false);
    else setDisabled(true);
    if (name === "" || email === "" || password === "") setDisabled(true);
    if (email.split("@").at(-1) !== "iiti.ac.in") setDisabled(true);
    if (password !== confirmPassword) setPasserr("Passwords Dont Match");
    else setPasserr("");
  }, [password, confirmPassword]);

  return (
    <div>
      <div className="signup">
        <div
          className="alert alert-danger"
          role="alert"
          style={{ display: alert }}
        >
          {alertmsg}
        </div>
        <div className="alert alert-success mt-4" style={{ display: success }}>
          <h4>Registration Successful!, We have sent a Confirmation Mail on your Email(It may take few minutes)</h4>
        </div>
        <div className="container outer">
          <div className="whitebox signup_container" id="signContain">
            <h1 className="text-center heading centerTop">REGISTER</h1>
            <div className="leftCol">
              <div className="mb-3 inputs" style={{ textAlign: "left" }}>
                <label className="form-label auth">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="inputbox"
                  placeholder="Name"
                  style={{ color: "black" }}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
              </div>
              <div className="mb-3 inputs" style={{ textAlign: "left" }}>
                <label className="form-label auth">
                  E-Mail <span className="smallx">(use IITI Email only)</span>
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="inputbox"
                  placeholder="Email"
                  style={{ color: "black" }}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
              </div>
              <div className="mb-3 inputs" style={{ textAlign: "left" }}>
                <label className="form-label auth">Phone</label>
                <br />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="inputbox"
                  placeholder="Phone"
                  style={{ color: "black" }}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
              </div>
              <div className="mb-3 inputs" style={{ textAlign: "left" }}>
                <label className="form-label auth">Codeforces Username</label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="inputbox"
                  placeholder="Codeforces Username"
                  style={{ color: "black" }}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
              </div>
            </div>
            <div className="rightCol">
              <div className="mb-3 inputs" style={{ textAlign: "left" }}>
                <label className="form-label auth">Difficulty</label>
                <p className="signfaq">
                  {" "}
                  &nbsp;Confused what to choose?{" "}
                  <Link to="/" className="signfaq2">
                    Click here
                  </Link>
                </p>
                <select
                  type="text"
                  name="difficulty"
                  id="difficulty"
                  className="inputbox"
                  style={{ color: "black" }}
                  required
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="mb-3 inputs" style={{ textAlign: "left" }}>
                <label
                  className="form-label auth"
                  style={{ textAlign: "left" }}
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="inputbox"
                  placeholder="Password"
                  style={{ color: "black" }}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>
              <div className="mb-3 inputs" style={{ textAlign: "left" }}>
                <label
                  className="form-label auth"
                  style={{ textAlign: "left" }}
                >
                  Confirm Password
                </label>
                <br />
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  className="inputbox"
                  placeholder="Confirm Password"
                  style={{ color: "black" }}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br />
              </div>
              <div className="pass">
                <p>&nbsp;{passerr}</p>
              </div>
            </div>
            <div className="centerRow">
              <button
                className="btnsignup"
                type="submit"
                onClick={handleRegister}
                disabled={disabled}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
