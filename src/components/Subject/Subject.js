import React, { Component } from "react";

import "./Subject.css";

import Loading from "../Loading/Loading";

class Subject extends Component {
  render() {
    return (
      <div className="sub-container">
        <div>this is list for subject {this.props.match.params.sub}</div>
      </div>
    );
  }
}

export default Subject;
