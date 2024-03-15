import React, { Component } from 'react'
import MemoComponentPractice from './MemoComponentPractice'

class ParentForMemoComp extends Component {
 
  constructor(props) {

    super(props)

    this.state = {

       studentName: 'Kishore'

    }

  }

  componentDidMount() {

    setInterval(() => {this.setState({
        studentName: 'Kishore' 
    })}, 4000)

  }
  
  render() {

    console.log("Parent Component")

    return (
      <div>
        <MemoComponentPractice studentName={this.state.studentName}/>
      </div>
    )
  }
}

export default ParentForMemoComp






