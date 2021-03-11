import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  // Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import MainContainer from "./components/MainContainer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <div className="home-set">
              <Home />
            </div>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/player">
            {localStorage.token ? <span></span> : <Redirect to="/login" />}
            <MainContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
