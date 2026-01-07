import React from 'react'
import { modeTheme } from './DarkThemeProvider'
import { useState } from 'react';

const DarkThemeGetter = () => {
    const {mode, setmode} = useState(modeTheme);
  return (
    <div>
        <div style={{
            background: mode === 'light'? 'light': '#111',
            color: mode === 'light'? '#111': 'white',
        }}>
            {/* <div className={`mode==='light'? bg-[#121212]: [#FFFFFF]`}></div> */}
<h3>Mode is : {mode}</h3>
            <button onClick={() => (mode === 'light'? 'light': 'dark')}>ChangeTheme</button>
        </div>
    </div>
  )
}

export default DarkThemeGetter