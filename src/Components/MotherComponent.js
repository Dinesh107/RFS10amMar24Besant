import React, { Component } from 'react'
import DaughterComp from './DaughterComp';

class MotherComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
       motherName: 'Parvathi ammal'

    }

    this.welcomingMother = this.welcomingMother.bind(this)
    
   }

  welcomingMother() {

       alert(`Hello ${this.state.motherName}`);  

  }

  render() {
    return (
      <div>
        <DaughterComp welcomeMotherHandler = {this.welcomingMother} />
      </div>
    )
  }
}

export default MotherComponent