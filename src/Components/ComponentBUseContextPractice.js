import React from 'react'
import ComponentCUseContextPractice from './ComponentCUseContextPractice'

function ComponentBUseContextPractice(props) {
  return (
    <div className='box' >
        
        <h1>Component B</h1>

        <ComponentCUseContextPractice user={props.user}/>

    </div>
  )
}

export default ComponentBUseContextPractice