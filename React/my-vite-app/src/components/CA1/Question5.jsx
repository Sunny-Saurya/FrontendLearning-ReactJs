import React from 'react'
import Question5Child from './Question5Child';
import { useState } from 'react';
const Question5 = () => {


const [product, setproduct] = useState([
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 25000 }
]);
    
  return (
    <div>
        <Question5Child item={product}/>
    </div>  
  )
}

export default Question5