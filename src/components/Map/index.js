import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import ScatterplotOverlay from "./dataOverlay";

import Immutable from "immutable";

import marker from "./marker.png";

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
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <ScatterplotOverlay
          key="scatterplot"
          locations={this.props.points}
          dotRadius={10}
          globalOpacity={0.6}
          compositeOperation="lighter"
          dotFill="rgba(255, 0, 0, 0.5)"
          renderWhileDragging={true}
        />
      </ReactMapGL>
    );
  }
}
