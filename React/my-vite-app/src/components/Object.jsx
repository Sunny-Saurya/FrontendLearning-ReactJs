import React from 'react'

const Object = () => {
    
  const led = {
    color: 'red',
    shape: 'oval',
    category: 'bulb'
  }

  return (
    <div>
      <h2>Object</h2>
      <p>Color: {led.color}</p>
      <p>Brightness: {led.shape}</p>
      <p>Status: {led.category}</p>
    </div>
  )
}

export default Object