import React from "react";

class IngredientBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="ingredient-box">
        <h4>{this.props.userIngredient.name}</h4>
        <h5>Quantity: {this.props.userIngredient.quantity}</h5>
        <h5>Expires: {this.props.userIngredient.expiration_date}</h5>
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => {
            this.props.callback(this.props.userIngredient);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default IngredientBox;
