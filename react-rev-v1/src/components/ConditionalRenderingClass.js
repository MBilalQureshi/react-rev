import React, { Component } from 'react'

export default class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true,
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data Loaded' : 'Loading...'}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>
                    Welcome to site
                </p>
                <ol>
                    <li>
                        Confirm email
                    </li>
                    <li>
                        Confirm email
                    </li>
                    <li>
                        Confirm age
                    </li>
                </ol>
            </div>
        ) : (<p>Please sign in</p>)}
      </div>
    )
  }
}
