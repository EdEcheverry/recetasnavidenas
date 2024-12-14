import React from 'react';
import RecipeCard from '../components/RecipiesCard';
import useFetchRecipes from '../hooks/useFetschRecipes';

const Home: React.FC = () => {
  const { recipes, loading } = useFetchRecipes();

  if (loading) return <p>Loading books...</p>;

  return (
    <div className="home">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;