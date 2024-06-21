import React from 'react'

// WAY 1, 
// export default function FunctionalGreeting(props) {
//   return (
//     <div>
//         <h1>Hello my name is {props.name}</h1>
//         <h2>I am Stateless Functional Component</h2>
//     </div>
//   )
// }
// ----------------------------------------------------------------

// WAY 2, vanilla js simple function
// function FunctionalGreeting(props) {
//   return  <h1>Hello my name is {props.name}</h1>
// }
// export default FunctionalGreeting
// ----------------------------------------------------------------

// CONVERT WAY 2 TO ARROW FUNCTION ES7
const FunctionalGreeting = (props) => <h1>Hello my name is {props.name}</h1>;
export default FunctionalGreeting;
