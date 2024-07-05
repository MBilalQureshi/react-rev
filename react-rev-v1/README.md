# React Revision
## Install app
- Npm should be installed
- npx create-react-app [app-name] --use-npm (some people use yarn)
- npx executes node packages and comes pre-bundled with npm which as you already know is pre-bundled with node so all three of these tools node npm and npx all come together and make it super easy to create react applications with this simple create react app command with that complete npx has created a react app in the my app folder everything npm installed went into this node modules folder here and that's where react will look for any packages it needs

## Components in react
https://articles.wesionary.team/react-functional-components-vs-class-components-86a2d2821a22
1. Stateless Functional Components
- Just a JS function that return html.
- Because it's just a js function it can take parameters or we can say props.
- IMPORTANT - Once they are rendered with their props, the output will always remain the same.
- It's better to use these when there is no interactivity to avoid complexity.
- what ?
    - Do not track any internal properties
    - Always render the same thing
    - Cannot change unless given new props.
- ALWAYS USE THIS CALLBACK FUNCTION after this.setState, when you need to do something after updating the states so we have latest states values to work with
- Event handler
    - We define the handler as a method on a class so we don't need function keyword
2. Stateful Class Components
- IMPORTANT, they have the ability to change, they do this by using "state" which is JS object containing various properties.
- The initial state is defined in the constructor method. i.e this.state = { count = 0 }
- What?
    - Maintain an internal set of properties that describe what they display and how they behave
    - These properties are maintained in state object
    - state updated on user interaction
    - Can take props that can't be changed however states can be changed
- How to fetch a prop ?
    - {this.props.propName}
- How to fetch a state ?
    - {this.state.stateName}
- How to update the state ?(3 steps)
    - Exmaple we had onClick attribute to a button
    - We'll write and event handler to listen for the click event
    - Use setState() in the event handler to update the state
- this.setState is ASYNCHORNOUS, meaning it execute in background while other code is executing in the forground
- Event handler
    - We define the handler as a method on a class so we don't need function key word
    - No paranthesis just a function name is written onClick for example. We pass a function itself not a call to a function.
- ALWAYS USE THIS CALLBACK FUNCTION after this.setState, when you need to do something after updating the states so we have latest states values to work with
3. React Hooks(Mostly used)
- Built in react function which can be added to a stateless functional component, allowing them to behave like stateful class components.
- Accomplish more will less code.
- Avoid this keyword.
- No constructor

## 4 Ways to bind events (IMPORTANT)
BindingEvents.js
### Option 1: Define the handler as an arrow function (Primary Choice)
```
handleClick = () => { // Arrow Function in method
       this.setState({
           ...
       });
   }
```

### Option 2: Use an arrow function in the render method  (Secondary Choice)
```
<button onClick = {() => this.handleClick()}> // Arrow Function on event handler attribute
{this.state.buttonText}
</button>
```

- Arrow functions operate within the scope within which they are created e.g. Our React Component
- Use this option if your event handler requires parameters

### Option 3: Call bind on the handler with ‘this’
```
<button onClick = {this.handleClick.bind(this)}> // Use bind method
{this.state.buttonText}
</button>
```

### Option 4: Bind the event handler in the constructor
```
constructor(props){ // Within the constructor
       super(props);
       this.state = {
           ...
       };
       this.handleClick = this.handleClick.bind(this) // Using bind method
   }

...

<button onClick = {this.handleClick}> // bind is done in the constructor above
{this.state.buttonText}
</button>
```

- As binding occurs within the constructor, we only have to bind ‘this’ once instead of every time it occurs. 
- Good for performance in large applications.

## React Refs
Allow accessing DOM nodes or React elements created in the render method.
## Used for variety of things:
- Triggering imperative animations.
- integrating with third-part DOM libraries
- referencing values of uncontrolled components(we'll use this only for learning right now)
### React refs in uncontrolled form
There is no need for
- react state
- event handlers
- state updates

## React hooks
Built-in React functions which can be added to stateless functional components, allowing them to behave like stateful class components.
- Example: useState, useEffect
1. completely opt-in
2. backward-compatible
3. won't eliminate class components from React
4. Simplify our code, no need for:
    - State
    - event handlers
    - component lifecycle methods
    - class components and 'this'

### useState hook
is used to add state to functional components

### useEffect hook
replaces components lifecycle methods, componentDidMount, componentDidUpdate and componentWillUnmount

## HTTP and Data Fetching
- React app can exist without backend
- You should as what data is required for react app, what links, how would you login/out what protocol for it or what is needed as props and states. React just wants the data to act on it. What it has to render from prop and states.
- React can make request via
1. the browser fetch API
2. jQuery's .ajax() method
3. raw AJAX, namely XMLHttpRequest(XHR)
4. an npm libary,i.e axios

### Axios
- must be in main project folder
- npm install axios