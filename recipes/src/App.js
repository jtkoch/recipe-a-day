import React, {useState, useEffect} from 'react'; 
import './App.scss';
import {Route} from 'react-router-dom';  
import Landing from './components/Landing/Landing.js';
import Header from './components/Header/Header.js';
import Recipe from './components/Recipe/Recipe.js';
import axios from 'axios';

function App() {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => setRecipe(res.data.meals[0]))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route exact path="/">
        <Landing recipe={recipe} />
      </Route>  
      <Route path="/recipes/:id">
        <Recipe />
      </Route>
    </div>      
  );
}

export default App;
