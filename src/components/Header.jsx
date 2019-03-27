import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          React Stopwatch <FontAwesomeIcon icon="stopwatch" />
        </h1>
      </header>
    );
  }
}

export default Header;
