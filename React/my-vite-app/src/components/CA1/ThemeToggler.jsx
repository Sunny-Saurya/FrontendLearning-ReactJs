import React from 'react'
import { useState } from 'react';
const ThemeToggler = () => {
    
    const themes = {
        light: {'background': "white", 'color': 'black'},
        dark: {'background': "black", 'color': 'white'}
    }

    const [theme, settheme] = useState('light');

    // destructuring
    const {background, color} = themes[theme];

    // toggeler function

    const themeToggel = () => {
        settheme(prev => (prev === 'light'? 'dark': 'light'))
    }
  return (
    <div>
        <div style= {{
            background,
            color,
            height:'100vh',
            width:'100vw'
        }}></div>
        <h2>{theme.toUpperCase()} MODE</h2>
        
        <button style={{
            background:color,
            color: background
        }} onClick={themeToggel}>Change Theme</button>
    </div>
  )
}

export default ThemeToggler