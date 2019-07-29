import React, { Component } from "react";
import "./CustomizeImage.scss";

export default class CustomizeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      size: 0
    };
  }

  HandleEvent = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      url: value
    });
    console.log(event.target.value);
    console.log(this.state.image);
  };

  render() {
    return (
      <section className="customizeImage container">
        <h1 className="title-section center"> Customize Image</h1>
        <input
          type="text"
          name="customizeImage"
          className="input-style"
          placeholder="Customize your image"
          onChange={this.HandleEvent}
        />
        <input type="range" className="range-style" />
        <div className="bloc-img">
          <img src={this.state.url} alt="" />
        </div>
      </section>
    );
  }
}
