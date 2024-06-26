import React, {Component} from "react";

class StatefulGreetingOne extends Component{
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
        });
        console.log(this.state.introduction) // OLD VALUES, see this.setState is ASYNCHORNOUS section in readme, SOLUTION IS IN StatefulGreetingWithCallBack.js
        console.log(this.state.buttonText) // OLD STATE VALUE, see this.setState is ASYNCHORNOUS section in readme, StatefulGreetingWithCallBack.js
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

export default StatefulGreetingOne;