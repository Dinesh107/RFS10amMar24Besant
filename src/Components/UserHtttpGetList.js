import React, { Component } from "react";
import axios from "axios";

class UserHtttpGetList extends Component {

  constructor(props) {
    super(props)

    this.state = {
       posts: []    // state property which declared as a empty arry
    }
  }


 componentDidMount() {

     // to make the get request we need to invoke the get method ont the axios method

     axios.get('https://jsonplaceholder.typicode.com/posts') // ---> this method accepts the API endpoint as it arguments.

     .then(response => {  // --> it will accepts a arrow function as a argument which gives a access to the response

        console.log(response)  

           this.setState({posts: response.data})  // we are going to set the response data to the post array or we are retrived the data from the api
      
      })  

     .catch(error => {    // --> it will accepts a arrow function as a argument which gives a access to the error

        console.log(error, "error 404")

        this.setState({erroMessage: " Oops, Problem Occured while retrieving data from the API"})
      
      }) 

 }

  render() {
 
    const { posts, erroMessage } = this.state 

    return <div>List Of Users

      {
        posts.length ? posts.map(post => <div key={post.id}>

          `<h1>The Id is: {post.id}</h1>
           <h4>The Title is:</h4>{post.title}
           <h3>The Content is:</h3>{post.body}
           `
        </div>) : null
      }
      {

         erroMessage ? <div><h1>{erroMessage}</h1></div> : null
      }
    </div>;
  }
}

export default UserHtttpGetList;

