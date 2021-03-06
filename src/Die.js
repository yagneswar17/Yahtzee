import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(idx) {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let ABC = "";
    if (this.props.locked)
      ABC = "Die-locked";
    if (this.props.rolling)
      ABC += "Die-rolling";
    return (
      <i
        className={`Die fas fa-dice-${this.props.numberWords[this.props.val - 1]} fa-5x ${ABC}`}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      >
      </i>
    );
  }
}

export default Die;
