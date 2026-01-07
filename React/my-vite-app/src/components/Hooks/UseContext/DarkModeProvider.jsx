import React, { createContext } from 'react'
import DarkModeGetter from './DarkModeGetter';
export const modeContext = createContext(); // 1st step
import { useState } from 'react';

const DarkModeProvider = () => {
    const [mode, setmode] = useState('light');
  return (
    <div>
        <modeContext.Provider value={{mode, setmode}}>
            <DarkModeGetter/>
        </modeContext.Provider>
    </div>
  )
}

export default DarkModeProvider