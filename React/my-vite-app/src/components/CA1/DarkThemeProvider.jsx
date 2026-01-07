// making theme toggler using useContext

import React, { createContext } from 'react'
import DarkThemeGetter from './DarkThemeGetter'
import { useState } from 'react'
export const modeTheme = createContext() // 1st step - creating the context;
const DarkThemeProvider = () => {
    const [theme, settheme] = useState('light');
  return (
    <div>
        <modeTheme.Provider value={{theme, settheme}}>
            <DarkThemeGetter/>
        </modeTheme.Provider>
    </div>
  )
}

export default DarkThemeProvider