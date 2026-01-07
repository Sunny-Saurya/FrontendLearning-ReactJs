// Q6. Create a React app that uses Axios to perform a GET request and display the data.

import React, { useEffect, useEffectEvent, useState } from 'react'
import axios from 'axios'

const Question6 = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data));
  }, []);
  return (
        <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default Question6