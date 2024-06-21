import React, {Component} from "react";

class StatefulGreetingWithCallBack extends Component{
    constructor(props){
        super(props)
        this.state = {
            introduction : 'Hello!',
            buttonText : 'Exit',
        };
    }

    handleClick = () => {
        this.setState({
            introduction : 'GoodBye!',
            buttonText: 'Enter',
        }, ()=>{
            // IMP: ALWAYS USE THIS CALLBACK FUNCTION after this.setState, when you need to do something after updating the states so we have latest states values to work with
            console.log(this.state.introduction)
            console.log(this.state.buttonText)
        });
    }
    render(){
        return(
            <div>
                <h1>{this.state.introduction} , {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallBack;