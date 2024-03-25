import React, {useContext} from 'react'

import { UserContext } from './ComponentAUseContextPractice'

function ComponentDUseContextPractice() {

  const user = useContext(UserContext);

  return (
    <div className='box' >
        
        <h1>Component D</h1>
        <h2>{`goodbye ${user}`}</h2>

    </div>
  )
}

export default ComponentDUseContextPractice