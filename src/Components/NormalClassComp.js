//Normal class Component for Understanding pure component

import React, { Component } from 'react'

export class NormalClassComp extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
    }
  }


onIncrement = () => {

    this.setState({
      count: 0,
    })
}

  render() {
    
     console.log("normal comp render method call");

    return (
      <div>
        
        <h1>NormalClassComp</h1>
        {this.state.count}
        
        <button onClick={this.onIncrement} >Click the button</button>
      </div>
    )
  }
}

export default NormalClassComp