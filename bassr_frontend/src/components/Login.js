import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.token = data.token;
        history.push("/player");
      });
  };
  return (
    <div>
      <div className="login-img"></div>
      <div className="container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <div className="login-block">
            <div className="field">
              <p className="user-field">
                <input
                  className="input"
                  value={username}
                  type="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </p>
            </div>
            <div className="field">
              <p className="pass-field">
                <input
                  className="input"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="">
                <button
                  onClick={handleSubmit}
                  className="gradient-button gradient-button-1"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
