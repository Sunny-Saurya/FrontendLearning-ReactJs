import React from 'react'

const Recipes = () => {
    const [recipes, setrecipes] = useState([]);
    
    const handleViewDetails = (id) => {
        useEffect(() => {
        axios.get(`https://dummyjson.com/recipes/${id}`).then(res => setDish(res.data)).catch((err) => err);
    }, []);
    }
  return (
    <div>Recipes</div>
  )
}

export default Recipes