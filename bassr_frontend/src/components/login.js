import React, { Component } from "react";

const SONGS_URL = "http://localhost:3000/songs";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  login = (event) => {
    event.preventDefault();
    event.target.reset();

    const { username, password } = this.state;
    const user = { username, password };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        console.log(response);
        localStorage.token = response.jwt;
        this.props.setCurrentUser(response.user);
      });
  };

  render() {
    return (
      <div className="login-form-div">
        <form className="login-form" onSubmit={this.login}>
          <div className="inline fields">
            <input
              onChange={(e) => this.setState({ username: e.target.value })}
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="ui button" type="submit">
            LOGIN
          </button>
        </form>
        <form className="logout-form" onSubmit={this.props.handleLogout}>
          <button className="ui button" type="submit">
            LOGOUT
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
