import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const history = useHistory();
  const handleSubmit = (e) => {
    if (password === passwordConfirmation) {
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
    } else {
      setPasswordError("Passwords do not match");
    }
  };
  return (
    <div>
      {passwordError ? <p>Error: {passwordError}</p> : <span />}
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            value={username}
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
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
        <p className="control">
          <button onClick={handleSubmit} className="button is-success">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
