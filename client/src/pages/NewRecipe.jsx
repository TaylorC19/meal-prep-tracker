import React, { useState } from "react";
import Header from "../components/Header";
import Ingredients from "../components/Ingredients";
import RecipeInfo from "../components/RecipeInfo";
import "./NewRecipe.css";

const NewRecipe = () => {
  const [ingredientsArr, setIngredientsArr] = useState([
    { name: "", quantity: "", unit: "" },
  ]);
  const [recipeInfo, setRecipeInfo] = useState({
    title: "",
    servings: "",
    hours: "",
    minutes: "",
    description: "",
    instructions: "",
    is_public: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArr2 = ingredientsArr.map((ingredient) => {
      let string = `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`;
      return string;
    });
    const ingredientsStr = ingredientsArr2.join(",");
    console.log(ingredientsStr);
  };

  return (
    <div>
      <Header />
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <Ingredients
            ingredientsArr={ingredientsArr}
            setIngredientsArr={setIngredientsArr}
          ></Ingredients>
          <RecipeInfo
            recipeInfo={recipeInfo}
            setRecipeInfo={setRecipeInfo}
          ></RecipeInfo>
        </div>
        <button type="submit">Submit new recipe</button>
      </form>
    </div>
  );
};

export default NewRecipe;
