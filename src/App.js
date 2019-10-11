import React, { Component } from "react";
import Map from "./components/Map";
import ReportIssue from "./components/ReportIssue";
import Report from "./components/Report";
import Immutable, { fromJS } from "immutable";

import "./App.css";

const mapStyle = fromJS({
  version: 8,
  sources: {
    points: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-122.45, 37.78] }
          }
        ]
      }
    }
  },
  layers: [
    {
      id: "my-layer",
      type: "circle",
      source: "points",
      paint: {
        "circle-color": "#f00",
        "circle-radius": 4
      }
    }
  ]
});

export default class App extends Component {
  state = {
    reportOpened: false,
    problemOptions: [],
    positiveOptions: [],
    loadingPoints: true,
    points: [],
    reportProblem: "bad"
  };

  componentDidMount() {
    this.getMapPoints();
    this.getProblemTypes();
  }

  getProblemTypes = () => {
    fetch("https://neolabs-api.zpoken.ai/problems/types", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const problemOptions = res.filter(item => item.positive === false);
        const positiveOptions = res.filter(item => item.positive === true);
        this.setState({
          problemOptions: problemOptions,
          positiveOptions: positiveOptions
        });
      });
  };

  getMapPoints = () => {
    fetch("https://neolabs-api.zpoken.ai/problems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        // const locations = Immutable.fromJS(res);
        this.setState({
          points: res,
          loadingPoints: false
        });
      });
  };

  toggleReport = type => {
    console.log("togle");
    this.setState({
      reportOpened: !this.state.reportOpened,
      reportProblem: type
    });
  };

  render() {
    return this.state.loadingPoints ? null : (
      <div className="App">
        <Map points={this.state.points} mapStyle={mapStyle} />
        <ReportIssue
          clickHandler={() => this.toggleReport("good")}
          color="green"
          position="left"
        />
        <ReportIssue
          clickHandler={() => this.toggleReport("bad")}
          color="#ff9800"
          position="right"
        />
        {this.state.reportProblem === "bad" ? (
          <Report
            active={this.state.reportOpened}
            options={this.state.problemOptions}
            handleClose={this.toggleReport}
            getMapPoints={this.getMapPoints}
          />
        ) : (
          <Report
            active={this.state.reportOpened}
            options={this.state.positiveOptions}
            handleClose={this.toggleReport}
            getMapPoints={this.getMapPoints}
          />
        )}
      </div>
    );
  }
}
