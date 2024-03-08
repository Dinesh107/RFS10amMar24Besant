import React from 'react'

function DaughterComp(props) {
  return (
    <div>
        <button onClick={props.welcomeMotherHandler} >Welcoming Mother</button>
    </div>
  )
}

export default DaughterComp