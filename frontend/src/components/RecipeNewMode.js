import React from "react";
import { findAllIngredients } from "../services/IngredientService";

class RecipeNewMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      expiration_time_days: 0,
    };
  }

  render() {
    return (
      <div class="ingredient-box">
        <h3>Create New Recipe</h3>
        <form className="mt-4">
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
            <label for="formGroupExampleInput2">Expiration Time (Days):</label>
            <input
              onChange={(e) => this.setState({ expiration_time_days: e.target.value })}
              type="number"
              class="form-control"
              id="expirationTime"
              defaultValue={this.state.expiration_time_days}
            />
          </div>
        </form>
        <button
          className="btn btn-success"
          style={{ marginRight: 10 }}
          onClick={() =>
            this.props.newIngredient({
              name: this.state.name,
              expiration_time_days: this.state.expiration_time_days
            })
          }
        >
          Create
        </button>
      </div>
    );
  }
}

export default RecipeNewMode;
