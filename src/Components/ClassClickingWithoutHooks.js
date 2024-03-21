import React, { Component } from 'react'

class ClassClickingWithoutHooks extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incrementClicking = () => {
 
    this.setState({
        count: this.state.count + 1

    })
} 

  render() {
    return (
      <div>
      {this.state.count}
      <br />
      <button onClick={this.incrementClicking} >Count 
      </button>
      </div>
    )
  }
}

export default ClassClickingWithoutHooks

