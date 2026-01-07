import React from 'react'
import { useState } from 'react';
const FetchMethod = () => {
    const[post, setPost] = React.useState([]);

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPost(data));

  return (
    <div>
        <ul>All Data
        {post.map(item => (
            <li key={item.id}>
                Id: {item.id} <br/>
                Title: {item.title} <br/>
                Body: {item.body}
                </li>

        ))}
        </ul>
    </div>
  )
}

export default FetchMethod