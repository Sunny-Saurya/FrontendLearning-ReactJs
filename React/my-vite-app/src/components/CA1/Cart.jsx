// Display them using map() and add buttons to increase quantity / decrease / remove.
// Use useMemo to compute:
// Total price
// Total item count
// Memo values must update only when the cart changes.

import React, { useMemo } from 'react'
import { useState } from 'react';
const Cart = () => {

    const [items, setitems] = useState([
  { id: 1, name: "Shoes", price: 1500 },
  { id: 2, name: "Bag", price: 1000 },
  { id: 3, name: "Watch", price: 2000 }
]);

    const calculation = useMemo(() => {
        return items.reduce((sum, item) => sum + item.price , 0)
    })

  return (
    <>
       {
        items.map((item) => (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.price}</p>
            </div>
        ))
       }

       <button onClick={() => {
        setitems(items.map(item => ({
            ...item,
            price : item.price + 100
        })))
       }}>Increment</button>



       <button onClick={() => {
        setitems(items.map(item => ({
            ...item,
            price: item.price - 100
        })))
       }}>Decrement</button>


       <button onClick={() => {
        setitems([])
       }}>Remove</button>

       <button onClick={calculation}>click</button>

    </>

  )
}

export default Cart