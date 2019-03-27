import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Timer extends Component {
  state = {
    running: false,
    runningTime: "0:00:00:0",
    savedTime: 0
  };
  handleClick = () => {
    const startTime = new Date().getTime();

    const showTime = () => {
      const currentTime = new Date().getTime();
      this.timeDiff = currentTime - startTime + this.state.savedTime;
      let tenSec = Math.floor((this.timeDiff / 100) % 10);
      let seconds = Math.floor((this.timeDiff / 1000) % 60);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      let minutes = Math.floor((this.timeDiff / (1000 * 60)) % 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const hours = Math.floor((this.timeDiff / (1000 * 360)) % 60);
      const output = hours + ":" + minutes + ":" + seconds + ":" + tenSec;
      this.setState({ runningTime: output });
    };

    if (this.state.running) {
      this.setState({ running: false, savedTime: this.timeDiff });
      clearInterval(this.interval);
    } else {
      this.setState({ running: true });
      this.interval = setInterval(showTime, 100);
    }
  };
  handleReset = () => {
    this.setState({ runningTime: "0:00:00:0", running: false, savedTime: 0 });
    clearInterval(this.interval);
  };
  formatIcon() {
    return this.state.running ? "pause" : "play";
  }
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="timer">
            <div className="time">{this.state.runningTime}</div>
            <div className="controls">
              <div className="run" onClick={this.handleClick}>
                <FontAwesomeIcon icon={this.formatIcon()} />
              </div>
              <div className="reset" onClick={this.handleReset}>
                <FontAwesomeIcon icon="sync" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Timer;
