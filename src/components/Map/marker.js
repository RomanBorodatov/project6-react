import React, { PureComponent } from "react";

const pinStyle = {
  cursor: "pointer",
  stroke: "none"
};

export default class MarkerComponent extends PureComponent {
  render() {
    const { size = 20, onClick } = this.props;

    return (
      <svg
        height={size}
        viewBox="0 0 24 24"
        style={{
          ...pinStyle
        }}
        onClick={onClick}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          stroke="none"
          fill={`${
            this.props.positive
              ? "rgba(72, 175, 8, 0.5)"
              : "rgba(255, 0, 0, 0.5)"
          }`}
        />
      </svg>
    );
  }
}
