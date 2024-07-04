import React, {useState} from 'react'

export default function HooksCounter(props) {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Hooks</h1>
        <h2>My name is {props.name}</h2>
        <h3>You clicked {count} times</h3>
        {/* use arrow function (count would take prevValue)=> that would take previous value as parameter and make a count + 1 in it 
        
        Always pass a function to the setter function when updating state based on the previous state
        */}
        <button onClick={()=> setCount(count => count + 1)}>Increment Counter</button>
    </div>
  )
}
