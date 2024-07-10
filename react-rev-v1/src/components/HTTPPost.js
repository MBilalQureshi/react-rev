import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       response: null,
    }
  }
  // Or const onClick = () => {}
  postToApi = () => {
    // Axios takes care of JSON.stringify and headers
    axios.post('https://jsonplaceholder.typicode.com/posts',{title:'Hello Worlds', body:'It works', userId: 123,})
    .then(response=>{
      console.log(response)
      this.setState({
        response: response.data,
      })
    })
  }
  render() {
    // Destructuring is a good thing , REMEMBER
    const {response} = this.state
    return (
      <div>
        {/* OR below onClick={postToApi} */}
        <button onClick={this.postToApi}>
          Create a POST request
        </button>
          { response ? (
            <div>
              <h1>
                {response.title}
              </h1>
              <p>{response.body}</p>
              <p>{response.id}</p>
              <p>{response.userId}</p>
            </div>
          ) : (
            <h1>There is no response found, click button above</h1>
          ) }
          
      </div>
    )
  }
}

export default HTTPPost