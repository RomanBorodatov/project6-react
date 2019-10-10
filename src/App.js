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
    loadingPoints: true,
    points: []
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
        const options = res.map(item => {
          return {
            value: item.id,
            label: item.text
          };
        });
        this.setState({
          problemOptions: options
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

  toggleReport = () => {
    console.log("togle");
    this.setState({
      reportOpened: !this.state.reportOpened
    });
  };

  render() {
    return this.state.loadingPoints ? null : (
      <div className="App">
        <Map points={this.state.points} mapStyle={mapStyle} />
        <ReportIssue clickHandler={this.toggleReport} />
        <Report
          active={this.state.reportOpened}
          options={this.state.problemOptions}
          handleClose={this.toggleReport}
          getMapPoints={this.getMapPoints}
        />
      </div>
    );
  }
}
