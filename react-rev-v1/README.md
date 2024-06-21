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
3. React Hooks(Mostly used)
- Built in react function which can be added to a stateless functional component, allowing them to behave like stateful class components.
- Accomplish more will less code.
- Avoid this keyword.
- No constructor