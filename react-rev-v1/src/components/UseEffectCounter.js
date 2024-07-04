import React,{useEffect, useState} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    // Can have multiple useEffects, example timer that runs after every render
    // Effect should only run upon changes to relavent prop or state

    // useEffect();
    //----------- 1. Runs after every render or we can say after every update to any state or prop, THIS HURTS PERFORMANCE ---------------
    // useEffect(()=>{
    //     console.log('count 1 effect')
    //     document.title = `you clicked ${count} times`;
    // })


    // 2. -----------------  RUN WHEN COUNT CHANGES , RUN ONLY THIS EFFECT IF OTHER ARE HANDLED LIKE THIS ONE PROPERLY --------------------------
    useEffect(()=>{
        console.log('count 1 effect')
        document.title = `you clicked ${count} times`;

        // IMPORTANT: This [count] makes sure that this effect runs only when count changes
    },[count])


    // Below is Same effect as above but for count2, telling both of them runs separately by adding [count] and [count2]
    // const [count2, setCount2] = useState(0);
    // useEffect(()=>{
    //     console.log('count 2 effect')
    //     document.title = `you clicked ${count2} times`;

    //     // IMPORTANT: This [count2] makes sure that this effect runs only when count2 changes
    // },[count2])


    // 3. -------------------------- Timer effect - RUN ONLY ONCE ------------------------------------
    useEffect(()=>{
        console.log('Creating timer effect')
        const interval = setInterval(()=>{
            setTime(prevTime => prevTime + 1)
        },1000)
    },[])
  return (
    <div>
        <button onClick={()=>setCount(counterOne => counterOne + 1)}>
            Increment Count ({count})
        </button>

        {/* <button onClick={()=>setCount2(counterTwo => counterTwo + 1)}>
            Increment Count ({count2})
        </button> */}

        <h2>Time: {time}</h2> 
    </div>
  )
}

export default UseEffectCounter