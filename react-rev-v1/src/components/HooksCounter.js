import React, {useState} from 'react'

export default function HooksCounter(props) {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Hooks</h1>
        <h2>My name is {props.name}</h2>
        <h3>You clicked {count} times</h3>
        <button onClick={()=> setCount(count123 => count123 + 1)}>Increment Counter</button>
    </div>
  )
}
