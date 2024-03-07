import React, { Component } from 'react'

class StatePractice extends Component {

   constructor(props) {
  
        // super()
        // this.state = {

        //     info: 'Welcome to the Reactjs class'
        // }

        super(props)

        this.state = {

           count: 0

        }


   }

//    changeInfo() {

//        this.setState({
        
//         info:'I am a updated state, welcome to reactjs class'
    
//     })

//    }

  increasingTheValue() {

     this.setState({count: this.state.count + 1})

     console.log(this.state.count);

  } 

   render() {
       return(

          <div>
             {/* <h1>{this.state.info}</h1>
             <button onClick={() => this.changeInfo()} >click to change the msg</button> */}
             <br/>
             <div>Counting - {this.state.count}</div>
             <br/>
             <button onClick={() => this.increasingTheValue()} >Click The Button</button>

              <h4>Click The Button to Know How times it was clicked</h4>
            

          </div>

       )
   }

}

export default StatePractice


