import React, { useState } from 'react';

function App() {
  const [mood, setMood] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    if (!mood) return;
    const response = await fetch(`/api/recipes?mood=${encodeURIComponent(mood)}`);
    const data = await response.json();
    setRecipes(data);
  };

  return (
    <div>
      <h1>Mood-Based Recipe Recommender</h1>
      <input
        type="text"
        placeholder="Enter your mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <button onClick={fetchRecipes}>Get Recipes</button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
