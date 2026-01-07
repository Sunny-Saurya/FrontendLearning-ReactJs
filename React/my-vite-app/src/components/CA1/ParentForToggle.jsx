import React, { useState } from 'react';
import MoutingUnmounting from './MoutingUnmounting';

const ParentForToggle = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"} Toggle
      </button>

      {show && <MoutingUnmounting />}
    </>
  );
};

export default ParentForToggle;
