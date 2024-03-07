import React from "react";

// const DestructurePractice = ({name, sportsName}) => {
    
//     return (
  
//         <div>
            
//              <h1>Hello {name}, you are good at {sportsName}</h1>
           

//         </div>

//     )
// }

// DestructurePractice 

const DestructurePracticeFc = (props) => {

    const {name, sportsName} = props
    
    return (
  
        <div>
            
             <h1>Hello {name}, you are good at {sportsName}</h1>
    
        </div>

    )
}




export default DestructurePracticeFc