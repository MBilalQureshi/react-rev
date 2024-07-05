import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            this.setState({posts: response.data})
        })
    }
  render() {
    return (
      <div>
        {/* {this.state.posts.map(post=><div><h1>{post.body}</h1></div>)} */}
        {/* below is better for now not above, the code is valid tough */}
        {JSON.stringify(this.state.posts)}
      </div>
    )
  }
}

export default HTTPRequests