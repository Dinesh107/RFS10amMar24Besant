import React, { useState, createContext } from 'react'
import ComponentBUseContextPractice from './ComponentBUseContextPractice'

export const UserContext = createContext(); 

function ComponentAUseContextPractice() {

  const [user, setUser] = useState("Kishore");

  return (
    <div className='box' >
        
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value = {user}>
          <ComponentBUseContextPractice user = {user}/>
        </UserContext.Provider>
        

    </div>
  )
}

export default ComponentAUseContextPractice