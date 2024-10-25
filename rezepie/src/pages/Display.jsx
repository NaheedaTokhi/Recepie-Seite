import "../styles/Display.css";
import { Footer2 } from "../components/Footer2";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";

export const Display = () => {
  const navigate = useNavigate();
  const { searchRecepie, query, selectedRecepie,setSelectedRecipe } = useContext(SearchContext); 
  const recepieTitle = query.charAt(0).toUpperCase() + query.slice(1);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe.recipe); 
    navigate("/nutrients");
  };
  const handleRecipeSearch = (recipe) => {
    setSelectedRecipe(recipe.recipe); 
    navigate("/recipe-detail");
  }
  return (
    <>
    <div className="container">
      <div className="suchContainer">
     
        {query && searchRecepie.length > 0 && (
          <>
           <p className="description">Here are some delicious recipes that you found using the search terms. Click on "Nutrients Details" to see nutritional information or "Recipe Details" for more preparation information.
              </p>
          <h1 className="recepie-title">Recipes found for: {recepieTitle}</h1>
          </>
        )}
        <div className="recipe-grid">
          {searchRecepie.length > 0 ? (
            searchRecepie.map((recipe, index) => (
              <div className="recipe-card">
                <h2>{recipe.recipe.label}</h2>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
               <div className="recipe-details"
               key={index}
               onClick={() => handleRecipeSearch(recipe)}>Recipe Details</div>
               <div className="nutrient"
               key={index}
               onClick={() => handleRecipeClick(recipe)}>Nutrients Details</div>
              </div>
            ))
          ) : (
            <p className="no-recepie">No recipes found.</p>
          )}
        </div>
      </div>
      </div>
      <Footer2 />
    </>
  );
};
