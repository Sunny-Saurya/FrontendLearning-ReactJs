import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const [LED, setLED] = useState({
    color: "white",
    price: 200,
    isChargeable: true,
  });

  const [array, setArray] = useState(["Java", "Cpp", "DSA", "OS", "DBMS"]);
  
  return (
    <div>
      <div>UseState Hooks</div>
      <div>Count : {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>

      <h2>
        The LEDs color is : {LED.color} and price is : {LED.price}
      </h2>
      {/* <h3>Changing the color the LED : {LED.color} </h3> */}
      <button onClick={() => setLED({ ...LED, color: "red" })}>
        Change Color
      </button>

      <div>Trying on Array</div>
      <div>{array.toString()}</div>
      <div
        onClick={() => {
          const newArray = [...array];
          newArray[5] = "React";
          setArray(newArray);
        }}
      >
        Add Subject
      </div>

      <div
        onClick={() => {
          const newArray = [...array];
          newArray[5] = "";
          setArray(newArray);
        }}
      >
        Remove Subject
      </div>
    </div>
  );
};

export default UseState;
