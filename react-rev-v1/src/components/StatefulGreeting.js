import React, { Component } from 'react'

export default class StatefulGreeting extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }
    setCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }
  render() {
    return (
        <div>
            <h1>Hello my name is {this.props.name}</h1>
            <h1>Stateful Class component</h1>
            <h2>You have clicked {this.state.count} times</h2>
            <button onClick={this.setCount}>Increment Count</button>
        </div>
      
    )
  }
}
