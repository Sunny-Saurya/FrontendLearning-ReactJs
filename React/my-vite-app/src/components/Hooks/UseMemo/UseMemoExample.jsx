import React, { useMemo } from 'react'
import { useState } from 'react';
const UseMemoExample = () => {
    const [count, setcount] = useState(0);
    const [theme, settheme] = useState();
    const changeCount = () => {
        setcount(count => count + 1);
    }

    const changeTheme = () => {
        settheme((theme) => theme == 'light'? 'dark': 'light');
    }

    const complexCalculation = useMemo(() => {
        let i = 0;
        while(i < 1000000000){
            i++;
        }
        return count * 2;
    }, [count]);
  return (
    <div>
        <h2>Count : {count}</h2>
        <h4>Multiplication by 2 : {complexCalculation}</h4>
        <button onClick={changeCount}>change Count</button>
        <h3>Change Theme  : {theme}</h3>
        <button onClick={changeTheme}>change theme</button>
    </div>
  )
}

export default UseMemoExample