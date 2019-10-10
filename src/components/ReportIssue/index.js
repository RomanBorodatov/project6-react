import React, { Component } from "react";
import "./index.css";

export default class ReportIssue extends Component {
  render() {
    return (
      <div className="reportButton" onClick={this.props.clickHandler}>
        <span>+</span>
      </div>
    );
  }
}
