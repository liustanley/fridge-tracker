import React from "react";
import { findAllIngredientsForRecipe } from "../services/RecipeService";

class RecipeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeIngredients: [],
      favorite: this.props.favorite,
    };
  }

  componentDidMount() {
    findAllIngredientsForRecipe(
      this.props.recipe.recipe_id
    ).then((ingredients) => this.setState({ recipeIngredients: ingredients }));
  }

  render() {
    return (
      <div class="ingredient-box">
        <h4>{this.props.recipe.name}</h4>
        <h5>Description: {this.props.recipe.description}</h5>
        <h5>Preparation Time: {this.props.recipe.preparation_time}</h5>
        <h5>Ingredients:</h5>
        <ul>
          {this.state.recipeIngredients.map((ingredient) => {
            return (
              <li key={ingredient.ingredient_id}>{ingredient.name}</li>
            );
          })}
        </ul>
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => {
            this.props.callback(this.props.recipe);
          }}
        >
          Edit
        </button>
        {!this.state.favorite && (
          <button
            className="btn btn-outline-danger ml-3 mt-2"
            onClick={() => {
              this.props.addFavorite(this.props.recipe);
              this.setState({
                favorite: true,
              });
            }}
          >
            Favorite
          </button>
        )}
        {this.state.favorite && (
          <button
            className="btn btn-outline-danger disabled ml-3 mt-2"
            disabled
          >
            Favorited
          </button>
        )}
      </div>
    );
  }
}

export default RecipeBox;
