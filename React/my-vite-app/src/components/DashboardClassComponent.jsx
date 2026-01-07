import React from "react";

class DashboardClassComponent extends React.Component{
    constructor(){
        super();
        this.state ={
            color : "Red",
            year: 2000,
            count : 0,
        }
    }

    changeState = () => {
        this.setState({year: 2005})
    }

    changeStateI = () => {
        this.setState({count:this.state.count+1})
    }
     changeStateII = () => {
        this.setState({count:this.state.count-1})
        
    }

    render(){
        return(
            <>
                <h3>Color : {this.state.color} and Year : {this.state.year}</h3>
                <button onClick={this.changeState}>Click to Change year</button>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.changeStateI}>Increment</button>
                <button onClick={this.changeStateII}>Decrement</button>
            </>
        )
    }
}


export default DashboardClassComponent;