import React from 'react'
import ComponentDUseContextPractice from './ComponentDUseContextPractice'

function ComponentCUseContextPractice(props) {
  return (
    <div className='box' >
        
        <h1>Component C</h1>

        <ComponentDUseContextPractice user={props.user}/>

    </div>
  )
}

export default ComponentCUseContextPractice