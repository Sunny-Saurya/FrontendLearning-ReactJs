import React from 'react'
import { useState } from 'react';
const UseToggelCustomHook = () => {
    const [toggle, settoggle] = useState('ON');

    const changeToggle = () => {
        settoggle(toggle === 'ON' ? 'OFF' : 'ON')
    }
  return [toggle, changeToggle];
}

export default UseToggelCustomHook