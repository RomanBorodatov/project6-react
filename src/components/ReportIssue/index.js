import React, { Component } from "react";
import "./index.css";

export default class ReportIssue extends Component {
  render() {
    return (
      <div
        className={`reportButton ${this.props.position}`}
        onClick={this.props.clickHandler}
        style={{ backgroundColor: this.props.color }}
      >
        {
          this.props.filterIcon ?
          <span>&#x25BC;</span>
          :
          <span>+</span>
        }
      </div>
    );
  }
}
