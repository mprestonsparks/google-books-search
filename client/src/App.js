import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import "./App.css";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
                <Route exact path="/" component={Books}/>
                <Route path="/saved" component={Saved}/>
              </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
