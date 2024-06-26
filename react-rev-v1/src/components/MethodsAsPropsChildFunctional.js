import React from 'react'

function MethodsAsPropsChild(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                        <button onClick={props.handleSignInOut}>Sign out</button>
                    </div>
                ) : (
                    <div>
                        <p>Please sign in</p>
                        {/* This prop will cause parent to chnage it's state */}
                        <button onClick={props.handleSignInOut}>
                            Sign in
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default MethodsAsPropsChild