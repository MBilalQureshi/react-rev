import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: importedNames,
        inputText: '',
      }
    }
    handleChange = (event) => {
        this.setState({
            inputText: (event.target.value).toLowerCase(),
            names: importedNames.filter(this.state.inputText)
        })
    }
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            <input placeholder='search names...' value={this.state.input} onChange={this.handleChange}></input>
        </form>
        <div style={{margin: 'auto'}}>
            {this.state.names.map(name=>{
                return <p key={name}>{name}</p>
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar