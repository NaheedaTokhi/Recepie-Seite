import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import "../styles/Nutrients.css"
import {Footer2} from "../components/Footer2"

export const Nutrients = () => {
  const { selectedRecipe } = useContext(SearchContext); 

  if (!selectedRecipe) {
    return <div>No recipe found </div>; 
  }
  const nutrients = selectedRecipe.totalNutrients;
  const daily = selectedRecipe.totalDaily;

  return (
    <>
    <div className="nutrients-container">
      <h1> Nutritional Information</h1>
      <p>
        This page provides detailed nutritional information about the selected recipe. 
        You can explore the amount of each nutrient, the units in which they are measured, 
        and their contribution to the daily recommended intake. Nutrients are essential 
        components that your body needs to function properly, and this breakdown will help 
        you understand the health benefits of the selected recipe.
      </p>
      <p>
        The table below shows key nutrients, including vitamins, minerals, proteins, fats, 
        carbohydrates, and more. The "% Daily Value" (Daily%) indicates how much a nutrient 
        in a serving of food contributes to a daily diet based on a 2,000 calorie daily intake, 
        which is the general nutrition advice. Adjustments may be necessary based on individual 
        dietary needs.
      </p>
      <h2>{selectedRecipe.label}</h2>
      <img src={selectedRecipe.image} alt={selectedRecipe.label} />
      <table className="nutrients-table">
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Daily %</th> 
          </tr>
        </thead>
        <tbody>
          {Object.keys(nutrients).map((key) => {
            const nutrient = nutrients[key];
            const dailyPercentage = daily[key] ? Math.round(daily[key].quantity) : null; 

            return (
              <tr key={key}>
                <td>{nutrient.label}</td>
                <td>{Math.round(nutrient.quantity)}</td> 
                <td>{nutrient.unit}</td>
                <td>{dailyPercentage ? `${dailyPercentage}%` : "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <Footer2/>
    </>
  );
};