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
        this.setState((prevState, prevProps)=>{
            // introduction : this.state.introduction === 'Hello!' ? 'GoodBye!' : 'Hello!' ,
            // buttonText: this.state.buttonText === 'Exit' ? 'Enter': 'Exit'
            // USE PREV STATE AND PROPS HERE INSTEAD OF this.state.introduction
            console.log('PrevState',prevState)
            console.log('PrevProps',prevProps)
            return{
                introduction : prevState.introduction === 'Hello!' ? 'GoodBye!' : 'Hello!' ,
                buttonText: prevState.buttonText === 'Exit' ? 'Enter': 'Exit' 
            }
        });
    }

    handleIncrement = () =>{
        this.setState((prevState, prevProps)=>{
            console.log('PrevState',prevState)
            console.log('PrevProps',prevProps)
            //we'll use return here , it's normal in arrow function don't forget
            return{
                // count: this.state.count + 1,
                count: prevState.count + 1
            }
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