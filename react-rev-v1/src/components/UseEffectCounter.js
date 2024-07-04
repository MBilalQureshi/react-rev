import React,{useEffect, useState} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);

    // useEffect();
    useEffect(()=>{
        // after every render BUT THIS COULD HURT APP PERFORMANCE
        document.title = `you clicked ${count} times`;
    })
  return (
    <div>
        <button onClick={()=>setCount(count => count + 1)}>
            Increment Count ({count})
        </button>
    </div>
  )
}

export default UseEffectCounter