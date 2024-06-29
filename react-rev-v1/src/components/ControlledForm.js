import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         category:'website',
         comments:'',
      }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    // IMPORTANT: INSTEAD OF USING THREE HANDLERS IT'S BETTER TO USE "Computer property name instead", see commented code
    handleChange = (event) => {
        const {name, value} = event.target
        console.log(value)
        this.setState({
            [name]: value
        })
    }

    // These are three handler which are not used now just the above one 
    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    handleCategoryChange = (event) => {
        console.log(event.target.value)
        this.setState({
            category: event.target.value
        })
    }
    handleCommentChange = (event) => {
        console.log(event.target.value)
        this.setState({
            comments: event.target.value
        })
    }
  render() {
    return (
      <div>
        <h2>Fill the form</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="id-name">Your Name:</label>
                <input 
                    value={this.state.name}
                    id="id-name"
                    name='name'
                    type='text'
                    /*onChange={this.handleNameChange}*/
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor="id-category">Query Category:</label>
                <select id="id-category" name="category" value={this.state.category} /*onChange={this.handleCategoryChange}*/ onChange={this.handleChange}>
                    <option value="website">Website Issue</option>
                    <option value="order">Order Issue</option>
                    <option value="general">General Issue</option>
                </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments:</label>
                <textarea id="id-comments" name='comments' value={this.state.comments} /*onChange={this.handleCommentChange}*/ onChange={this.handleChange}/>
            </div>
            <input type='submit' value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default ControlledForm