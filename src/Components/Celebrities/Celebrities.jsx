import React, { Component } from "react";
import axios from "axios";

export default class Celebrities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celebrities: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?page=2&api_key=YOUR-API-KEY`
      )
      .then(res => {
        const celebrities = res.data;
        this.setState({ celebrities });
      });
  }

  render() {
    console.log("hello");
    return (
      <section className="celebrities container">
        <h1 className="title-section center">Celebrities</h1>

        <ul>
          {this.state.celebrities.map((cele, i) => (
            <li key={i}>{cele.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}
