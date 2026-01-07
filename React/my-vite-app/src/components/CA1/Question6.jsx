// 9. Create a cart component (similar to your sample but new values):
// const products = [
//   { id: 1, name: "Keyboard", price: 1200 },
//   { id: 2, name: "Mouse", price: 800 },
//   { id: 3, name: "Headphones", price: 2500 }
// ];


// Requirements:

// Show products using map

// Increase, decrease quantity

// Remove item with filter

// Use useMemo to calculate:

// Total items

// Total price
// Memo should run only when cart changes.

import React from 'react'
import { useState } from 'react';
const Question6 = () => {
    const [product, setproduct] = useState([
  { id: 1, name: "Keyboard", price: 1200 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Headphones", price: 2500 }
]);

  return (
    <>
    <div>Items Cart :</div>
    
    <div>
        {product.map(i => (
            <div key={i.id}>
                <div>
                    Product: {i.name}
                </div>
                <div>
                    Price: {i.price}
                </div>
            </div>
        ))}
    </div>
<br />
    <div>
        <button 
            onClick={() => setproduct(
                product.map((i) => ({
                    ...i,
                    price: i.price + 100
                }))
            )}
        >Increase</button> <br /> <br />

        <button onClick={() => setproduct(
            product.map((i) => ({
                ...i,
                price: i.price - 100
            }))
        )}>Decrease</button>
    </div>

        <div>Total Items: {product.length}</div>
        <div>Total Price : 
            {
                product.reduce((a, b) => a + b.price , 0)
            }


        </div>
    </>
  )
}

export default Question6