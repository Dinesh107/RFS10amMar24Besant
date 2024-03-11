import React, { Component } from "react";

class CondIfElsePractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentLoggedIn: false,
    };
  }

  render() {

    let info

    if (this.state.studentLoggedIn) {
      info = <div><h1>Welcome Ganesh you have logged into the sports club portal</h1></div>
    } else {
      info = <div><h1>Welcome to the Sports Club portal</h1></div>
    }

    return <div>{info}</div>
    

    // if (this.state.studentLoggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome Ganesh you have logged into the sports club portal</h1>
    //     </div>
    //   );
    // } else {
    //   return <div><h1>Welcome to the Sports Club portal</h1></div>;
    // }

    // return (
    //   <div>
    //        <div><h1>Welcome Ganesh you have logged into the sports club portal</h1></div>
    //        <div>Welcome to the Sports Club portal</div>
    //   </div>
    // )
  }
}

export default CondIfElsePractice;
