import React from 'react'
import { memo } from 'react';
const ChildTheme = (props) => {
    console.log("Child Comp Render");
    
  return (
    <>
    <div>ChildTheme</div>
    <button onClick={props.countii}></button>
    </>
  )
}

export default memo(ChildTheme)