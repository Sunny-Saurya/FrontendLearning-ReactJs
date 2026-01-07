import React from 'react'

const ChildComp = (props) => {
    console.log("Child component rendered !!");
    
  return (
    <div>
        <button onClick={props.Incre}>Increament</button>
        <button onClick={props.Decre}> Decrement</button>
    </div>
  )
}

export default React.memo(ChildComp)