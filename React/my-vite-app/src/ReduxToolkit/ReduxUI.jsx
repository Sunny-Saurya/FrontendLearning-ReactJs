import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './ReduxSlicer';

const ReduxUI = () => {
    const couterState = useSelector(state => state.counterRed.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>This is Redux Toolkit UI Component</h2>
        <h2>Couter: {couterState}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default ReduxUI