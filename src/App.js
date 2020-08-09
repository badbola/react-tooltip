import React from "react";
import Btn from "./Btn";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: "top",
    };
  }
  topPos() {
    this.setState({
      place: "top",
    });
  }
  botPos() {
    this.setState({
      place: "bottom",
    });
  }
  lefPos() {
    this.setState({
      place: "left",
    });
  }
  rigPos() {
    this.setState({
      place: "right",
    });
  }
  render() {
    return (
      <div className="App">
        <ul>
          <div className="List">
            <h3>Choose the tooltip direction</h3>
            <li id="top" onClick={() => this.topPos()}>
              <img
                alt="top"
                className="action-icons"
                src="https://image.flaticon.com/icons/svg/892/892555.svg"
              />
            </li>
            <div className="leftright">
              <li id="lef" onClick={() => this.lefPos()}>
                <img
                  alt="left"
                  className="action-icons"
                  src="https://image.flaticon.com/icons/svg/892/892512.svg"
                />
              </li>
              <li id="right" onClick={() => this.rigPos()}>
                <img
                  alt="right"
                  className="action-icons"
                  src="https://image.flaticon.com/icons/svg/892/892528.svg"
                />
              </li>
            </div>
            <li id="bot" onClick={() => this.botPos()}>
              <img
                alt="bottom"
                className="action-icons"
                src="https://image.flaticon.com/icons/svg/892/892498.svg"
              />
            </li>
          </div>
        </ul>
        <br></br>
        <div className="btn">
          <Btn place={this.state.place} />
        </div>
      </div>
    );
  }
}

export default App;
