import React from "react";
import ReactTooltip from "react-tooltip";
import "./Btn.css";

class Btn extends React.Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div className="button">
        <a data-tip data-for="happyFace">
          Hover
        </a>
        <ReactTooltip id="happyFace" place={this.props.place} effect="solid">
          <span>Tooltip is in {this.props.place} direction</span>
        </ReactTooltip>
      </div>
    );
  }
}

export default Btn;
