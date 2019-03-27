import React, { Component } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faPause,
  faSync,
  faStopwatch
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlay, faPause, faSync, faStopwatch);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Timer />
      </React.Fragment>
    );
  }
}

export default App;
