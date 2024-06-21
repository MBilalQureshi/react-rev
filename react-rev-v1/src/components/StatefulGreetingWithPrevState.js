import React, {Component} from "react";

class StatefulGreetingWithPrevState extends Component{
    constructor(props){
        super(props)
        this.state = {
            introduction : 'Hello!',
            buttonText : 'Exit',
            count: 0,
        };
    }

    handleClick = () => {
        this.setState({
            introduction : this.state.introduction === 'Hello!' ? 'GoodBye!' : 'Hello!' ,
            buttonText: this.state.buttonText === 'Exit' ? 'Enter': 'Exit'
        }, ()=>{
            console.log(this.state.introduction)
            console.log(this.state.buttonText)
        });
    }

    handleIncrement = () =>{
        this.setState({
            count: this.state.count + 1,
        })
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.introduction} , {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <h2>Increment Value: {this.state.count}</h2>
                <button onClick={() => this.handleIncrement()}>Increment</button>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;