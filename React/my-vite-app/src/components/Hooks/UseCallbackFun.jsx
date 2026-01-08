import React, { useState, useCallback } from "react";
import Child from "./Child";

const UseCallbackFun = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>
      <Child onIncrement={increment} onDecrement={decrement} />
    </>
  );
};

export default UseCallbackFun;
