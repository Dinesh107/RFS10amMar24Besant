import React, { Component } from 'react'
import HOC from './HocPractice'

class ShareCountHocPractice extends Component {

  render() {
    return (
      <div>
         {this.props.countNumber}

         <br />

         <button onClick={this.props.handleClick} >Share</button>

      </div>
    )
  }
}

const EnhanceShares = HOC(ShareCountHocPractice);

export default EnhanceShares;


