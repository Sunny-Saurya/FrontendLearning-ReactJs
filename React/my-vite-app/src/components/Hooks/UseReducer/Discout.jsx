import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return Math.min(state + (action.amount ?? 10), 100)
    case 'REMOVE':
      return Math.max(state - (action.amount ?? 10), 0)
    case 'RESET':
      return 0
    default:
      return state
  }
}

const Discout = () => {
  const [discount, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <h4>Discount</h4>
      <p style={{margin: 0}}>
        Current discount: <strong>{discount}%</strong>
      </p>

      <div style={{display: 'flex', gap: 8, marginTop: 8}}>
        <button onClick={() => dispatch({ type: 'ADD' })}>Add Discount</button>
        <button onClick={() => dispatch({ type: 'REMOVE' })}>Remove Discount</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </>
  )
}

export default Discout