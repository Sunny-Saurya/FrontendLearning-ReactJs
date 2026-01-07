import React from 'react'

const Question5Child = (props) => {
  return (
    <div>
        {props.item.map((i) => (
            <div key={i.id}>
                <h3>Product Name: {i.name}</h3>
                <h4>Price: {i.price}</h4>
            </div>
        ))}
    </div>
  )
}

export default Question5Child