import React from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {
  const loc = useLocation();
  const { name, regno } = loc.state || {};
  return (
    <div>
      <br />About Page
      <br />
      Name: {name}
      <br />
      Reg No: {regno}
    </div>
  );
}

export default About