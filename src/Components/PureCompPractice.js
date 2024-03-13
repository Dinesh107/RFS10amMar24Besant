import React, { PureComponent } from 'react'

class PureCompPractice extends PureComponent {

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
        
         console.log("Pure comp render method call");
    
        return (
          <div>
            
            <h1>NormalClassComp</h1>
            {this.state.count}
            
            <button onClick={this.onIncrement} >Click the button</button>
          </div>
        )
      }
    }

export default PureCompPractice