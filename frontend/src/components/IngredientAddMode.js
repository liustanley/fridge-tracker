import React from "react";
import { findAllIngredients } from "../services/IngredientService";

class IngredientAddMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      selectedIngredientId: 1,
      quantity: this.props.userIngredient.quantity,
      expiration: this.props.userIngredient.expiration_date,
    };
  }

  componentDidMount() {
    findAllIngredients().then((ingredients) =>
      this.setState({ ingredients: ingredients })
    );
  }

  render() {
    return (
      <div class="ingredient-box">
        <h3>Add Ingredient to Fridge</h3>
        <form className="mt-4">
          <div class="form-group">
            <label for="formGroupExampleInput2">Ingredient:</label>
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
          <div class="form-group">
            <label for="formGroupExampleInput2">Quantity:</label>
            <input
              onChange={(e) => this.setState({ quantity: e.target.value })}
              type="number"
              class="form-control"
              id="quantity"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Expiration Date:</label>
            <input
              onChange={(e) => this.setState({ expiration: e.target.value })}
              type="date"
              class="form-control"
              id="expirationDate"
            />
          </div>
        </form>
        <button
          className="btn btn-success"
          style={{ marginRight: 10 }}
          onClick={() =>
            this.props.add({
              username: this.props.username,
              ingredient_id: this.state.selectedIngredientId,
              quantity: this.state.quantity,
              expiration_date: this.state.expiration,
            })
          }
        >
          Add
        </button>
      </div>
    );
  }
}

export default IngredientAddMode;
