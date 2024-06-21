import React, {Component} from "react";

class StatefulGreetingOne extends Component{
    constructor(props){
        super(props)
        this.state = {
            introduction : 'Hello!',
            buttonText : 'Exit',
        };
    }
    render(){
        return(
            <div>
                <h1>{this.state.introduction} , {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreetingOne;