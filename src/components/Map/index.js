import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

export default class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 49.9935,
      longitude: 36.2304,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1Ijoicm9tYW5ib3JvZGF0b3YiLCJhIjoiY2sxa2w3N3Y1MDdvZjNibzNveXFidWpuaSJ9.h9858JVC3HbU02hxED68eg"
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}
