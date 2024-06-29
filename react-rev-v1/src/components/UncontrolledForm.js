import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputTextArea = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Get current value
        console.log(this.inputName.current.value) //Just like this we can get current.id, current.name or any other attribute html element has

        // Get input element it's self
        console.log(this.inputName.current)

        console.log(this.inputCategory.current.value)
        console.log(this.inputTextArea.current.value)

    }

  render() {
    return (
      <div>
        <h2>Fill the form</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="id-name">Your Name:</label>
                <input 
                    id="id-name"
                    name='name'
                    type='text'
                    ref={this.inputName}
                    defaultValue="John Doe" // to add default value like in controlled form {this.state.name}
                />
            </div>
            <div>
                <label htmlFor="id-category">Query Category:</label>
                <select id="id-category" name="category" ref={this.inputCategory}>
                    <option value="website">Website Issue</option>
                    <option value="order">Order Issue</option>
                    <option value="general">General Issue</option>
                </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments:</label>
                <textarea id="id-comments" name='comments' ref={this.inputTextArea}/>
            </div>
            <input type='submit' value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default UncontrolledForm