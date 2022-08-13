import React from "react";
import "./Style2.css";
import Footer2 from "./Footer2";
import axios from "axios";

function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [difficulty, setDifficulty] = React.useState("beginner");
  const handleRegister = () => {
    axios
      .post("http://localhost:5000/register", {
        name: name,
        email: email,
        password: password,
        phone: phone,
        codeforces_handle: username,
        difficulty: difficulty,
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/";
        } else {
          console.log("failed");
        }
      })
      .catch(() => {
        console.log("failed");
      });
  };

  React.useEffect(() => {
    if (password === confirmPassword) setDisabled(false);
    else setDisabled(true);
    if (name === "" || email === "" || password === "") setDisabled(true);
  }, [password, confirmPassword]);

  return (
    <div>
      <div className="signup">
        <div className="alert alert-danger" role="alert">
          error or whateverglkwehfeiwrh oho
        </div>
        <div className="container outer">
          <div className="whitebox signup_container">
            <h1 className="text-center heading">SIGNUP</h1>
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
              <label className="form-label auth">E-Mail</label>
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
            <div className="mb-3 inputs" style={{ textAlign: "left" }}>
              <label className="form-label auth">Difficulty</label>
              <br />
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
              <br />
            </div>
            <div className="mb-3 inputs" style={{ textAlign: "left" }}>
              <label className="form-label auth" style={{ textAlign: "left" }}>
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
              <div className="mb-3 inputs" style={{ textAlign: "left" }}></div>
              <label className="form-label auth" style={{ textAlign: "left" }}>
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
            <button
              className="btnsignup"
              type="submit"
              onClick={handleRegister}
              disabled={disabled}
            >
              SIGNUP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
