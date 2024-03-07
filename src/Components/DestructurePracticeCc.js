import React, { Component } from 'react'

class DestructurePracticeCc extends Component {

   render() {
    
       const {name, sportsName} = this.props

       return <h1>Hello {name}, You are Good at {sportsName}</h1>

   }

}

export default DestructurePracticeCc