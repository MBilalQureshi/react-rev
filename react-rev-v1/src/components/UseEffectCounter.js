import React,{useEffect, useState} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);

    // Can have multiple useEffects, example timer that runs after every render
    // Effect should only run upon changes to relavent prop or state

    // useEffect();
    useEffect(()=>{
        console.log('count 1 effect')
        document.title = `you clicked ${count} times`;

        // IMPORTANT: This [count] makes sure that this effect runs only when count changes
    },[count])


    const [count2, setCount2] = useState(0);
    useEffect(()=>{
        console.log('count 2 effect')
        document.title = `you clicked ${count2} times`;

        // IMPORTANT: This [count2] makes sure that this effect runs only when count2 changes
    },[count2])

  return (
    <div>
        <button onClick={()=>setCount(counterOne => counterOne + 1)}>
            Increment Count ({count})
        </button>

        <button onClick={()=>setCount2(counterTwo => counterTwo + 1)}>
            Increment Count ({count2})
        </button>
    </div>
  )
}

export default UseEffectCounter