import React, { Component } from "react";
import "./Temperature.scss";

export default class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  Weather = evt => {
    console.log(evt.target.value);
    if (evt.target.value <= 0) {
      this.setState({
        message: "It's cold ❄️"
      });
    }
    if (evt.target.value >= 10 && evt.target.value <= 30) {
      this.setState({
        message: "It's nice 🌼"
      });
    }
    if (evt.target.value >= 30) {
      this.setState({
        message: "It's warm ☀️"
      });
    }
  };

  render() {
    return (
      <section className="temperature container">
        <h1 className="title-section center"> Temperature</h1>
        <input
          type="number"
          name="temperature"
          className="input-style"
          placeholder="Enter your temperature"
          onChange={this.Weather}
        />
        <div className="message">{this.state.message}</div>
      </section>
    );
  }
}
