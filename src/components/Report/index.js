import React, { Component } from "react";
import Select from "react-select";

import "./index.css";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "100%"
  })
};

export default class Report extends Component {
  state = {
    selectedProblemValue: null,
    error: "",
    locating: false
  };

  handleSelect = select => {
    this.setState({
      selectedProblemValue: select.value
    });
  };

  error = () => {
    this.setState({
      error: "Unable to retrieve your location"
    });
  };

  success = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const problem = this.state.selectedProblemValue;

    const userId =
      localStorage.getItem("userId") &&
      localStorage.getItem("userId") !== undefined
        ? localStorage.getItem("userId")
        : null;

    fetch("https://neolabs-api.zpoken.ai/problems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userId
      },
      body: JSON.stringify({
        lng: longitude,
        lat: latitude,
        type: parseInt(problem)
      })
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("userId", res.userId);
        this.setState({
          locating: false
        });
        this.props.getMapPoints(-1);
        this.props.handleClose();
      });
  };

  handleSubmit = () => {
    if (this.props.isFilter){
      const problem = this.state.selectedProblemValue;
      console.log("problem", problem);
      this.props.getMapPoints(problem);
      this.props.handleClose();
      return
    }

    if (!navigator.geolocation) {
      this.setState({
        error: "Geolocation is not supported by your browser"
      });
    } else {
      this.setState({
        locating: true
      });
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  };

  getOptions = () => {
    const options = this.props.options.map(option => {
      return {
        value: option.id,
        label: option.text
      };
    });
    return options;
  };

  render() {
    return (
      <div className={`report ${this.props.active ? "active" : ""}`}>
        <div className="close-button" onClick={this.props.handleClose}>
          <span>x</span>
        </div>
        <h3>{this.props.text}</h3>
        <Select
          styles={customStyles}
          options={this.getOptions()}
          onChange={this.handleSelect}
        />
        <button
          className="button"
          onClick={this.handleSubmit}
          disabled={!this.state.selectedProblemValue}
        >
          <span>{this.props.isFilter ? "Фильтровать" : "Отправить"}</span>
        </button>
      </div>
    );
  }
}
