"use client";
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Welcome",
    };
  }

  updateSetState = () => {
    this.setState({
      msg: "You are Best",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateSetState}>SET STATE</button>
      </div>
    );
  }
}

export default App;


