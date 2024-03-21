import React, {useEffect, useState} from 'react'

function UseEffectHookPractice() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green"); 

  useEffect(() => {

     document.title = (`Count: ${count} ${color}` );

  }, [count, color]);

  function clickingCount() {

     setCount(c => c + 1);

  }

  function subtractCount() {

     setCount(c => c - 1);

  }

  function changeColor() {

    setColor(c => c === "green" ? "red" : "green");

  }

  return (
    <div>
        <p style={{color: color}} >Count: {count}</p>
        <button onClick={clickingCount} >Click</button>
        <button onClick={subtractCount} >Subtract</button>
        <br />
        <button onClick={changeColor} >Change Color</button>
    </div>
  )
}

export default UseEffectHookPractice