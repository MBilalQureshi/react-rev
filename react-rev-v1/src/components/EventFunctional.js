import React from 'react'

export default function EventFunctional() {
    function handleClick(){
        console.log("Functional event handler triggered")
    }
  return (
    <div>
        {/* No paranthesis just a function name is written onClick for example. We pass a function itself not a call to a function. */}
        <button onClick={handleClick}>click me - Functional component - event handler</button>
    </div>
  )
}
