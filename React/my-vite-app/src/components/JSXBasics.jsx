import React from 'react'

const x = 10;

function mul(marks){
    return marks * 3;
}
// const Style1 ={
//   color : "red",
//   background:yellowgreen,
// }

const JSXBasics = () => {
  return (
    <div>

        {/* to show any expression you need to specify the keyword inside the curly braces */}
        <h2>The multiplication of 2 and 5 is : {2*5}</h2>
        <p>The value of x is : {x}</p>
        <h4>The value of are : {mul(5)}</h4>

    </div>
  )
}

export default JSXBasics