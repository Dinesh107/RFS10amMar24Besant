import React, {useState} from 'react'

function HooksClickingUseSatePractice() {

  const [count, setCount] =  useState(0) 

  return (
    <div>
        {count}
        <br />
        <button onClick={() => setCount(count + 1)} >Click</button>
    </div>
  )
}

export default HooksClickingUseSatePractice


