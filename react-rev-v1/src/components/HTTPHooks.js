import React,{useEffect, useState} from 'react'
import axios from 'axios'

function HTTPHooks() {
    // GET states
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    // POST states
    const [response, setResponse] = useState(null)
    const [postMessage, setPostMessage] = useState(null)

    // GET 
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            const data = Array.isArray(response.data) ? response.data : [response.data]
            setPosts(data)
        })
        .catch(error => {
            setError(error.message)
        })
    },[])

    // Post (happens on button click to no need for useEffect)
    const postToApi = () => {
        // Axios takes care of JSON.stringify and headers
        axios.post('https://jsonplaceholder.typicode.com/posts',{title:'Hello Worlds', body:'It works', userId: 123,})
        .then(response=>{
            setPostMessage(
                response.status === 201 ?
                `Post created successfully: ${response.data.title} ` : 
                'Failed to create post'
            )
            setResponse(response.data)
        })
      }
  return (
    <div>
        <h2>GET</h2>
        {/* GET */}
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
                error ?
                (<h4>{error}</h4>) :
                (<h4>Loading...</h4>)
        )
        }

        {/* POST */}
        <h2>POST</h2>
        <button onClick={postToApi}>
          Create a POST request
        </button>
        <p>{postMessage}</p>
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

export default HTTPHooks