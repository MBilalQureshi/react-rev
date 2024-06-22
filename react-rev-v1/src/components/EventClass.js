import React, { Component } from 'react'

export default class EventClass extends Component {
    // We define the handler as a method on a class so we don't need function key word
    handleClick(){
        console.log("Class button is clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me - class component - event handler</button>
      </div>
    )
  }
}
