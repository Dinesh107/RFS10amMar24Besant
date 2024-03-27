import React, { Component } from 'react'

class UserHttpPostForm extends Component {

     constructor(props) {  
       super(props)
     
       this.state = {     // we going to state property for these three filds and linkthem back to the input elements
          userId: '',
          title: '',
          body: ''
       }
     } 

     changeHandler = (e) => {
       
        this.setState({ [e.target.name]: e.target.value })

     }

  render() {

    const { userId, title, body } = this.state

    return (
      <div>
        <form>
            <div>
               <input 
               type="text" 
               name="userId" 
               value={userId} 
               onChange={this.changeHandler} />  // is for to track the changes in the input values and keep them in sync with the state object  - it is event handler
            </div>
            <div>
               <input 
               type="text" 
               name="title" 
               value={title}
               onChange={this.changeHandler}/>
            </div>
            <div>
               <input 
               type="text" 
               name="body" 
               value={body}
               onChange={this.changeHandler}/>
            </div>
           <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default UserHttpPostForm

