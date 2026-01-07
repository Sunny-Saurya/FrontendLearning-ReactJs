import React from 'react'

class CarComponent extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='text-yellow-500'>
        <h4>This is car class compoent. The model is {this.props.model}</h4>
      </div>
    )
  }
}

export default CarComponent