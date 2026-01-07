import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dish } from './data.jsx';
const Home = () => {
    const [dish, setDish] = useState([]);
    const navigate = useNavigate();
    
  return (
    <div>All Recipies
        {
            dish.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                    <button onClick={() => { 
                        navigate(`/recipes/${item.id}`);
                        handleViewDetails(item.id)
                    }}>View Details</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home