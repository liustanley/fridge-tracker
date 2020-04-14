import React from "react";

class RecipeEditMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.recipe,
      name: this.props.recipe.name,
      description: this.props.recipe.description,
      preparation_time: this.props.recipe.preparation_time
    };
  }

  render() {
    return (
      <div class="ingredient-box">
        <h3>Edit Recipe: {this.state.name}</h3>
        <form className="mt-2">
          <div class="form-group">
            <label for="formGroupExampleInput2">Name:</label>
            <input
              onChange={(e) =>
                this.setState({ name: e.target.value })
              }
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
              onChange={(e) => this.setState({ preparation_time: Number(e.target.value) })}
              type="number"
              class="form-control"
              id="prep"
              defaultValue={this.state.preparation_time}
            />
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
              preparation_time: this.state.preparation_time
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