import React from "react";
import {
  findAllIngredientsForRecipe,
  addIngredientToRecipe,
} from "../services/RecipeService";
import { findAllIngredients } from "../services/IngredientService";

class RecipeEditMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.recipe,
      name: this.props.recipe.name,
      description: this.props.recipe.description,
      preparation_time: this.props.recipe.preparation_time,
      recipeIngredients: [],
      selectedIngredientId: 1,
      ingredients: [],
      amount: 0,
    };

    this.addIngredient = this.addIngredient.bind(this);
  }

  componentDidMount() {
    findAllIngredientsForRecipe(
      this.props.recipe.recipe_id
    ).then((ingredients) => this.setState({ recipeIngredients: ingredients }));
    findAllIngredients().then((ingredients) =>
      this.setState({ ingredients: ingredients })
    );
  }

  addIngredient() {
    addIngredientToRecipe(this.state.recipe.recipe_id, {
      ingredient_id: this.state.selectedIngredientId,
      amount: this.state.amount,
    });
  }

  render() {
    return (
      <div class="ingredient-box">
        <h3>Edit Recipe: {this.state.name}</h3>
        <form className="mt-2">
          <div class="form-group">
            <label for="formGroupExampleInput2">Name:</label>
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              class="form-control"
              id="name"
              defaultValue={this.state.name}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Description:</label>
            <input
              onChange={(e) => this.setState({ description: e.target.value })}
              type="text"
              class="form-control"
              id="desc"
              defaultValue={this.state.description}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Preparation Time (min):</label>
            <input
              onChange={(e) =>
                this.setState({ preparation_time: Number(e.target.value) })
              }
              type="number"
              class="form-control"
              id="prep"
              defaultValue={this.state.preparation_time}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Ingredients:</label>
            <ul>
              {this.state.recipeIngredients.map((ingredient) => {
                return (
                  <li key={ingredient.ingredient_id}>
                    {ingredient.name}
                  </li>
                );
              })}
            </ul>
            <div>
              <label>Add Ingredient:</label>
              <select
                class="form-control-sm ml-2"
                onChange={(e) => {
                  const selectedIngredientId = e.target.value;
                  this.setState({ selectedIngredientId: selectedIngredientId });
                }}
                placeholder="Select an ingredient"
                value={this.state.selectedIngredientId}
              >
                {this.state.ingredients.map((ingredient) => {
                  return (
                    <option
                      key={ingredient.ingredient_id}
                      value={ingredient.ingredient_id}
                    >
                      {ingredient.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>Amount:</label>
              <input
                onChange={(e) =>
                  this.setState({ amount: Number(e.target.value) })
                }
                type="number"
                class="form-control"
                id="amount"
              />
            </div>
            <button
              onClick={this.addIngredient}
              class="btn btn-outline-secondary mt-2"
            >
              Add
            </button>
          </div>
        </form>
        <button
          className="btn btn-success"
          style={{ marginRight: 10 }}
          onClick={() =>
            this.props.edit({
              ...this.state.recipe,
              name: this.state.name,
              description: this.state.description,
              preparation_time: this.state.preparation_time,
            })
          }
        >
          Done
        </button>
        <button
          className="btn btn-danger"
          style={{ marginLeft: 10 }}
          onClick={() => {
            this.props.delete(this.state.recipe);
          }}
        >
          Delete Recipe
        </button>
      </div>
    );
  }
}

export default RecipeEditMode;
