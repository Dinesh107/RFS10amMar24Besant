import React from 'react'

function MemoComponentPractice({studentName}) {

   console.log('MemoComponentPractice');

  return (

    <div>
         <h1>Memo Component</h1>
         {studentName}

    </div>
  )
}

export default React.memo(MemoComponentPractice)