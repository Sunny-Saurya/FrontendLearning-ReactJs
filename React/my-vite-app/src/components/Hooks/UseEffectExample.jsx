import React, { useState } from 'react'

const UseEffectExample = () => {
  const [color, setColor] = useState("");
  useEffect(() => {
    console.log("Component is Mounted");
    return () => { // cleanup
      console.log("Component is Unmounted");
      
    }
  }, []  ) ; // [] is for dependies array
    
  const changeColor = () => {
    setColor (() => "white");
  }
  
  return (
    <>    <div></div>
    <button onClick={changeColor}>changeColor</button>
    </>

  )
}

export default UseEffectExample