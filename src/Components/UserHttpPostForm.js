import React, { Component } from 'react'
import axios from 'axios'

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

     submitHandler = (e) => {

         e.preventDefault()  // to avoid the current page refresh

         console.log(this.state)

         axios.post('https://jsonplaceholder.typicode.com/posts', this.state) 
         
         // post  will accept two parameters, 
         // first parameter -> The path where going to send the date (link of the fake api)
         // second paramter -> which is the data that has to be sent to the server

         .then(response => {console.log(response)})
         .catch(error => {console.log(error)})


     }



 //change handler -->  is for to track the changes in the input values and keep them in sync with the state object  - it is event handler

  render() {

    const { userId, title, body } = this.state

    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
               <label htmlFor="">UserID:- </label>
               <input 
               type="text" 
               name="userId" 
               value={userId} 
               onChange={this.changeHandler} />   
            </div>
            <div>
            <label htmlFor="">Title:- </label>
               <input 
               type="text" 
               name="title"
               value={title}
               onChange={this.changeHandler}/>
            </div>
            <div>
            <label htmlFor="">Body:- </label>
               <input 
               type="text" 
               name="body" 
               value={body}
               onChange={this.changeHandler}/>
            </div>
           <button type='sumbit' >Submit</button>
        </form>
      </div>
    )
  }
}

export default UserHttpPostForm

