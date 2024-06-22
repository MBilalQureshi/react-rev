import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
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

export default UserMessage