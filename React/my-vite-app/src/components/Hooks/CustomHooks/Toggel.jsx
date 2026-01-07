// import React from 'react'
// import { useState } from 'react';
// const Toggel = () => {
//     const [toggle, settoggle] = useState('ON');
//   return (
//     <div>
//         <h1>Toggle Button</h1>
//         <button onClick={() => {
//             settoggle(toggle === 'ON' ? 'OFF' : 'ON')
//         }}>{toggle}</button>
//     </div>
//   )
// }

// export default Toggel  


// using custom hook
import React from 'react'
import UseToggelCustomHook from './UseToggelCustomHook';

const Toggel = () => {
    const [toggle, changeToggle] = UseToggelCustomHook();
  return (
    <div>
        <h1>Toggle Button</h1>
        <button onClick={changeToggle}>{toggle}</button>
    </div>
  )
}

export default Toggel