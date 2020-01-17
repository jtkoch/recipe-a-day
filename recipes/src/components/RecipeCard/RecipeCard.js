import React from 'react';
import './RecipeCard.scss';

function RecipeCard(props) {
  const {recipe} = props;
  return (
    <div className="recipeCard">
      <h2>Recipe Card</h2>
        { recipe && (
          <React.Fragment>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} />
          </React.Fragment>
        )}
    </div>
  )
}

export default RecipeCard