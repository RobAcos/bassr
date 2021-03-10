import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/player">
            <MainContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
