import React, { Component } from "react";
import HOC from "./HocPractice";

class CommentCountHocPractice extends Component {
  render() {
    return (
      <div>
        Total Comments : {this.props.countNumber}
        <br />
        <button onClick={this.props.handleClick}>Add Comment!!!</button>
      </div>
    );
  }
}

const EnhanceComments = HOC(CommentCountHocPractice);

export default EnhanceComments;
