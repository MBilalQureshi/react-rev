import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChildFunctional'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    //We need a clickHandler in parent and pass in the child as prop for sign in in child to work
    handleSignInOut = () => {
        this.setState((prevState, prevProps)=>{
            return{
                isLoggedIn: prevState.isLoggedIn === true ? false : true
            }
        })
    }
    render() {
        return (
            <div>
                {/* IMPORTANT CONCEPT {this.handleSignIn} passing the function itself */}
                {/* IMPORTANT CONCEPT {handleSignIn} calling the function */}
                <MethodsAsPropsChild isLoggedIn={this.state.isLoggedIn} handleSignInOut={this.handleSignInOut}/>
            </div>
        )
    }
}

export default MethodsAsPropsParent