import React from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Home from './Home'
import Recipes from './Recipes'
const ParentRoutes = () => {
  return (
    <div>
        <h2>Parent Routes Component</h2>    
        <BrowserRouter>
            
            <Route path ="/" component={Home} />
            <Route path="/recipes" component={Recipes} />
        </BrowserRouter>

    </div>
  )
}

export default ParentRoutes