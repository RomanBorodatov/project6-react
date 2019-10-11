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
    filterOpened: false,
    problemOptions: [],
    positiveOptions: [],
    filterOptions: [],
    loadingPoints: true,
    points: [],
    reportProblem: "bad"
  };

  componentDidMount() {
    this.getMapPoints(-1);
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
        const filterOptions = [{"id": -1, "text": "Все"}, ...res];

        this.setState({
          problemOptions: problemOptions,
          positiveOptions: positiveOptions,
          filterOptions: filterOptions
        });
      });
  };

  getMapPoints = filter => {
    fetch("https://neolabs-api.zpoken.ai/problems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("filter", filter);
        let resPoints = [];

        if (filter === -1){
          resPoints = res;
        }else{
          resPoints = res.filter(point => point.typeId === filter)
        }

        this.setState({
          points: resPoints,
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

  toggleFilter = () => {
    console.log("toggleFilter");
    this.setState({
      filterOpened: !this.state.filterOpened
    });
  }

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
          color="red"
          position="right"
        />
        <ReportIssue
          clickHandler={() => this.toggleFilter()}
          color="#ff9800"
          position="top"
          filterIcon={true}
        />
        {this.state.filterOpened ? 
          <Report
            active={this.state.filterOpened}
            options={this.state.filterOptions}
            handleClose={this.toggleFilter}
            getMapPoints={this.getMapPoints}
            isFilter={true}
            text={"Фильтр"}
          />
        :
          this.state.reportProblem === "bad" ? (
            <Report
              active={this.state.reportOpened}
              options={this.state.problemOptions}
              handleClose={this.toggleReport}
              getMapPoints={this.getMapPoints}
              isFilter={false}
              text={"Отметить проблему"}
            />
          ) : (
            <Report
              active={this.state.reportOpened}
              options={this.state.positiveOptions}
              handleClose={this.toggleReport}
              getMapPoints={this.getMapPoints}
              isFilter={false}
              text={"Отметить проблему"}
            />
          )
        }
      </div>
    );
  }
}
