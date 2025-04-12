"use client";
import React, { Component } from "react";

class Header extends Component {
  constructor(){
    super();
    this.state={ count:0};
    this.plus= this.plus.bind(this);
    this.minus= this.minus.bind(this);
  }

  plus(){
    this.setState(
      {count:this.state.count+1}
    );
  }

  minus(){
    this.setState(
      {count:this.state.count-1}
    );
  }
      
  render() {
   
    return (
      <div className="container">
          <h1>Using class components</h1>
          <p>Counter App</p>
          <p className="number">{this.state.count}</p>
          <button className="btn btn-1" onClick={this.plus}>+</button>
          <button className="btn btn-2" onClick={this.minus}>-</button>
      </div>
    )
  }

}


export default Header;