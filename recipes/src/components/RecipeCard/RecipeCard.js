import React from 'react';
import './RecipeCard.scss';

function RecipeCard(props) {
  const {recipe} = props;
  return (
    <div className="recipeCard">
        { recipe && (
          <React.Fragment>
            <h2>{recipe.strMeal}</h2>
            <img alt="recipe" src={recipe.strMealThumb} />
          </React.Fragment>
        )}
    </div>
  )
}

export default RecipeCard