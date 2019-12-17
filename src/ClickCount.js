import React from "react";

class ClickCount extends React.Component {
  constructor(props) {
    super(props);
    this.myTimer = 0;
    this.state = {
      counter: 0,
      start: false
    };
  }

  count = () => {
    const timer = () => {
      this.setState({
        counter: this.state.counter + 1,
        start: true
      });
    };
    this.myTimer = setInterval(timer, 2000);
  };

  pause = () => {
    this.setState({
      start: false
    });
    clearInterval(this.myTimer);
  };

  render() {
    document.title = this.state.counter;
    return (
      <div className="App">
        <label> {this.state.counter}</label>
        <button onClick={!this.state.start ? this.count : this.pause}>
          {this.state.start ? "Pause" : "Start"}
        </button>
      </div>
    );
  }
}

export default ClickCount;
