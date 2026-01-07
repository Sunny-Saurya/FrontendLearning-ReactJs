import React, { useCallback } from 'react'
import ChildTheme from './ChildTheme';
import { useState } from 'react';

const ParentTheme = () => {
    const [theme, settheme] = useState('light');
    const [count, setcount] = useState(0);

    const changeTheme = useCallback(() => {
        settheme((theme) => theme == 'light'? 'dark': 'light');
    },[count])

    const chnageCount = useCallback(() => {
        setcount(count => count + 1);
    },[])
    console.log("Parent comp render");
    

  return (
    <>
    <div>ParentTheme</div>
    <ChildTheme countii = {chnageCount} />
    <h4> Theme : {theme}</h4>
    <button onClick={changeTheme}>change theme</button>
    </>
  )
}

export default ParentTheme