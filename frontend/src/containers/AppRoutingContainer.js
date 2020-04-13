import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import MainPage from "../components/MainPage";

class AppRoutingContainer extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/home/:username" component={MainPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
      </Router>
    )
  }
}

export default AppRoutingContainer;