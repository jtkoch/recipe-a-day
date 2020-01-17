import React, {useEffect} from 'react'
import Recipe from '../Recipe/Recipe.js';
import RecipeCard from '../RecipeCard/RecipeCard.js';
import './Landing.scss';
import {Link} from 'react-router-dom';

 function Landing(props) {
   console.log(props);
   const {recipe} = props;
   useEffect(() => {

   }, [])
  return (
    <div className="container">
      {recipe && (
        <Link to={`/recipes/${recipe.idMeal}`}>
          <div className="randomRecipe">
            <RecipeCard recipe={recipe} id={recipe.idMeal} /> 
          </div>
        </Link>
      )}
    </div>
  )
}

export default Landing