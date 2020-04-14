import React from "react";

class RecipeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="ingredient-box">
        <h4>{this.props.recipe.name}</h4>
        <h5>Description: {this.props.recipe.description}</h5>
        <h5>Preparation Time: {this.props.recipe.preparation_time}</h5>
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => {
            this.props.callback(this.props.recipe);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default RecipeBox;
