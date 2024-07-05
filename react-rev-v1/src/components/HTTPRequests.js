import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:null,
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response)
            this.setState({
                // switch above url BY PROVIDING /1 to see the difference, it will return an object, solution is below after posts:
                // Put in an array if object is returned, otherwise just return the object as it's already in an array
                posts: Array.isArray(response.data) ? response.data : [response.data]
            })
        })
        .catch(error => {
            // make above url incorrect to see the error
          console.log(error)
          this.setState({
                error: error.message,
          })
        })
    }
  render() {
    const posts = this.state.posts
    return (
      <div>
        {/* {JSON.stringify(this.state.posts)} */}
        <h2>Posts</h2> 
        {
            posts.length ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.id} . {post.title}</h2>
                        <h4>By user id: {post.userId}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                )
                )
            ):(
                this.state.error ?
                (<h4>{this.state.error}</h4>) :
                (<h4>Loading...</h4>)
        )
        }
      </div>
    )
  }
}

export default HTTPRequests