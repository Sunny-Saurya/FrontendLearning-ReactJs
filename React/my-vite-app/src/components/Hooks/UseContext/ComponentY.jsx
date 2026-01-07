import React from 'react'
import {useContext} from 'react';
import { snameContext, sunameContext } from './UseContext';
const ComponentY = () => {
    const name = useContext(snameContext);
    const surname = useContext(sunameContext);

  return (
    <div>
        <h4>The name is {name} and  surname is {surname}</h4>
    </div>
  )
}

export default ComponentY