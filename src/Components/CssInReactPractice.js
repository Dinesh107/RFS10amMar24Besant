import React from 'react'
import './style.css'

function CssInReactPractice(props) {

    let className = props.heading1 ? 'heading1' : ' '

  return (
    <div>
        <h1 className={`${className} fontH1`}>CssInReactPractice</h1>
    </div>
  )
}

export default CssInReactPractice