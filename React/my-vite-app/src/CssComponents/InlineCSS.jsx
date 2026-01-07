import React from 'react'

const InlineCSS = () => {
    
    const myStyle = {
        color: "red",
        backgroundColor : "Yellow",
        border: "2px solid black",
    }

  return (
   
    <div>
        <h3 style={myStyle}>Hey there!! Welcome </h3>
    </div>
  )
}

export default InlineCSS