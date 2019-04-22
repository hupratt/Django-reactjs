import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Parallax from "./parallax";
import Posts from "./posts/Posts";
import Contact from "./contact";
import AboutUs from "./about-us";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/about-us/" component={AboutUs} />
          <Route exact path="/contact/" component={Contact} />
          <Route component={Posts} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
