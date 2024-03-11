import React from 'react'

function ListRenderPractice() {
 
  const Foods = ['mushroom 65', 'veg briyani', 'apple juice', 'ice cream']

  const foodList = Foods.map((food => <h2>{food}</h2>)) 
 
  return (
    <div>{foodList}</div>
  )
}

export default ListRenderPractice

