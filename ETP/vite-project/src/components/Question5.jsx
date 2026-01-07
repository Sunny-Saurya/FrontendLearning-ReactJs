// Q5. Create a React component that uses useEffect to fetch and display data from an API when the component mounts.

import React, { useEffect, useState } from 'react'

const Question5 = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then(data => setData(data));
    },[])
  return (
    <ul>
      {data.slice(0,5).map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default Question5