# React Revision
## Install app
- Npm should be installed
- npx create-react-app [app-name] --use-npm (some people use yarn)
- npx executes node packages and comes pre-bundled with npm which as you already know is pre-bundled with node so all three of these tools node npm and npx all come together and make it super easy to create react applications with this simple create react app command with that complete npx has created a react app in the my app folder everything npm installed went into this node modules folder here and that's where react will look for any packages it needs

## Components in react
1. Stateless Functional Components
- Just a JS function that return html.
- Because it's just a js function it can take parameters or we can say props.
- IMPORTANT - Once they are rendered with their props, the output will always remain the same.
- It's better to use these when there is no interactivity to avoid complexity.
2. Stateful Class Components
- IMPORTANT, they have the ability to change, they do this by using "state" which is JS object containing various properties.
- The initial state is defined in the constructor method. i.e this.state = { count = 0 }
3. React Hooks(Mostly used)
- Built in react function which can be added to a stateless functional component, allowing them to behave like stateful class components.
- Accomplish more will less code.
- Avoid this keyword.
- No constructor