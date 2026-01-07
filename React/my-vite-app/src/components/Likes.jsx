import React, { useState } from 'react'

class Likes extends React.Component{
    constructor(props){
        super(props);
        this.state = {count : 0};
    }
    
  handleLike = () => {
    this.setState({ count: this.state.count + 1 });
  };
    render(){
        return(
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.handleLike}>Like</button>
            </div>
        )
    }
}

export default Likes