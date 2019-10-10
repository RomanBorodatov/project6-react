import React, { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import MarkerComponent from "./marker";
import PointInfo from "./popupContent";

export default class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 49.989698,
      longitude: 36.221784,
      zoom: 15
    },
    popupInfo: null
  };

  _onViewportChange = viewport => this.setState({ viewport });

  markerClick = info => {
    this.setState({ popupInfo: info });
  };

  _renderMarker = (point, index) => {
    return (
      <Marker
        key={point.id}
        latitude={point.coordinates[0]}
        longitude={point.coordinates[1]}
      >
        <MarkerComponent size={20} onClick={() => this.markerClick(point)} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          latitude={popupInfo.coordinates[0]}
          longitude={popupInfo.coordinates[1]}
          closeOnClick={true}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <PointInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1Ijoicm9tYW5ib3JvZGF0b3YiLCJhIjoiY2sxa2w3N3Y1MDdvZjNibzNveXFidWpuaSJ9.h9858JVC3HbU02hxED68eg"
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._onViewportChange}
      >
        {this.props.points.map(point => this._renderMarker(point))}

        {this._renderPopup()}
      </ReactMapGL>
    );
  }
}
