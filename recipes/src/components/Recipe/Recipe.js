import React, {useState, useEffect} from 'react'
import axios from 'axios'; 
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import './Recipe.scss';

function Recipe() {
  const {id} = useParams()
  const [current, setCurrent] = useState({})
  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => setCurrent(res.data.meals[0]))
  }, [id])
  return (
    <React.Fragment>
      <Link className="home" to="/">Return Home</Link>
      {current && 
        <div className="recipe">
          <h2>{current.strMeal}</h2>
          {current.strYoutube ? <iframe className="video" width="560" height="315" 
          src={`https://www.youtube.com/embed/${current.strYoutube.split("=")[1]}`} 
          title={current.strMeal} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; 
          gyroscope; picture-in-picture" allowfullscreen></iframe> : <img alt="recipe" src={current.strMealThumb}/> }
          <p>{current.strInstructions}</p>
        </div>
      }
    </React.Fragment>
  )
}

export default Recipe