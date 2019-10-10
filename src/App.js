import React, { Component } from "react";
import Map from "./components/Map";
import ReportIssue from "./components/ReportIssue";

import "./App.css";

export default class App extends Component {
  state = {
    reportOpened: false
  };

  toggleReport = () => {
    console.log("togle");
    this.setState({
      reportOpened: !this.state.reportOpened
    });
  };

  render() {
    return (
      <div className="App">
        <Map />
        <ReportIssue clickHandler={this.toggleReport} />
      </div>
    );
  }
}
