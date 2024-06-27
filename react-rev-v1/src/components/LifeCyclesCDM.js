import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('Constructor called')
      super(props)
    
      this.state = {
         data : 'loading'
      }
    }
    componentDidMount(){
        console.log('Component mounted')
        this.getData()
    }
    getData = () => {
        console.log('getData() function called')
        setTimeout(()=>{
            console.log('Data Fetched ')
            this.setState({
                data: 'loaded'
            })
        },3000)
    }
    // or simple function
    // getData(){

    // }
    render() {
        console.log('Render methods called')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM