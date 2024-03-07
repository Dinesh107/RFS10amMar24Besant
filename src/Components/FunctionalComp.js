import React from 'react'

// function WelcomeMessage() {

//    return <h1>Hello Students</h1>

// }

const WelcomeMessage = (props) => {
    
    console.log(props)

    return (
  
        <div>
            
             <h1>Hello {props.name}, you are good at {props.sportsName}</h1>
             {props.children}

        </div>

    )
}

export default WelcomeMessage