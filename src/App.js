import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import Subject from "./components/Subject/Subject";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={NavBar} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/subject/:sub" component={Subject} />
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
