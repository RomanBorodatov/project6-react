import React, { PureComponent } from "react";

export default class PointInfo extends PureComponent {
  render() {
    const { info } = this.props;

    return <div>{info.type}</div>;
  }
}
