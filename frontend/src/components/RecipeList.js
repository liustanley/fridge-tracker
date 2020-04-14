import React from "react";
import RecipeBox from "./RecipeBox";
import RecipeEditMode from "./RecipeEditMode";
import RecipeNewMode from "./RecipeNewMode";
import { updateRecipe, deleteRecipe, createRecipeForUser } from "../services/RecipeService";

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeEdit: false,
      recipeNew: false,
      currentRecipe: {},
    };
    this.editButtonGotClicked = this.editButtonGotClicked.bind(this);
    this.doneButtonGotClicked = this.doneButtonGotClicked.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
  }

  edit(recipe) {
    updateRecipe(recipe.recipe_id, recipe, recipe.user_id).then(() => {
      this.setState({ recipeEdit: false });
      this.props.refreshRecipes();
    });
  }

  delete(recipe) {
    deleteRecipe(recipe.recipe_id, recipe.user_id).then(() => {
      this.setState({ recipeEdit: false });
      this.props.refreshRecipes();
    });
  }

  editButtonGotClicked(input) {
    this.setState({ recipeEdit: true, currentRecipe: input });
  }

  doneButtonGotClicked() {
    this.setState({ recipeEdit: false });
  }

  add(recipe) {
    createRecipeForUser(recipe, this.props.username).then(() => {
      this.setState({ recipeNew: false });
      this.props.refreshRecipes();
    });
  }

  render() {
    if (this.state.recipeEdit) {
      return (
        <div>
          <h1 class="mt-4">My Recipes</h1>
          <RecipeEditMode
            callback={this.doneButtonGotClicked}
            recipe={this.state.currentRecipe}
            edit={this.edit}
            delete={this.delete}
          ></RecipeEditMode>
        </div>
      );
    } else {
      return (
        <div>
          <h1 class="mt-4">My Recipes</h1>
          <button
            className="btn btn-primary mr-3"
            onClick={() => this.setState({ recipeNew: true })}
          >
            New Recipe
          </button>
          <button
            className="btn btn-secondary mr-3"
            onClick={this.allRecipesButtonClicked}
          >
            All Recipes
          </button>
          <button
            className="btn btn-success"
            onClick={this.whatToEatButtonClicked}
          >
            What to eat?
          </button>

          {this.state.recipeNew && (
            <RecipeNewMode
              username={this.props.username}
              add={this.add}
            />
          )}

          {this.props.recipes.map((recipe) => {
            return (
              <RecipeBox
                key={recipe.user_id + recipe.recipe_id}
                callback={this.editButtonGotClicked}
                recipe={recipe}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default RecipeList;
