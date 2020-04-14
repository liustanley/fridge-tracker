import React from "react";
import { findAllIngredients } from "../services/IngredientService";

class RecipeNewMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      preparation_time: 0,
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
            <label for="formGroupExampleInput2">Description:</label>
            <textarea
              type="text"
              class="form-control"
              onChange={(e) => this.setState({ description: e.target.value })}
              defaultValue={this.state.description}
            />
          </div>

          <div class="form-group">
            <label for="formGroupExampleInput2">Preparation Time:</label>
            <input
              onChange={(e) =>
                this.setState({ preparation_time: e.target.value })
              }
              type="number"
              class="form-control"
              id="expirationTime"
              defaultValue={this.state.preparation_time}
            />
          </div>
        </form>
        <button
          className="btn btn-success"
          style={{ marginRight: 10 }}
          onClick={() => {
            this.props.add({
              name: this.state.name,
              description: this.state.description,
              preparation_time: this.state.preparation_time,
            });
          }}
        >
          Create
        </button>
      </div>
    );
  }
}

export default RecipeNewMode;