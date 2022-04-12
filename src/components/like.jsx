import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

class Like extends Component {
  state = { clicked: false };

  handleLike = () => {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  };
  renderButtonClass = () => {
    let button = "fa fa-heart";
    return this.state.clicked ? button : button + "-o";
  };
  render() {
    return (
      <i
        className={this.renderButtonClass()}
        aria-hidden="true"
        onClick={this.handleLike}
      ></i>
    );
  }
}

export default Like;
