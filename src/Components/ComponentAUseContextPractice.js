import React, { useState } from 'react'
import ComponentBUseContextPractice from './ComponentBUseContextPractice'


function ComponentAUseContextPractice() {

  const [user, setUser] = useState("Kishore");

  return (
    <div className='box' >
        
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentBUseContextPractice user = {user}/>

    </div>
  )
}

export default ComponentAUseContextPractice