import React from "react";

class IngredientEditMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIngredient: this.props.userIngredient,
      ingredientEdit: false,
      currentIngredient: "",
      quantity: this.props.userIngredient.quantity,
      expiration: this.props.userIngredient.expiration_date,
    };
  }

  render() {
    return (
      <div class="ingredient-box">
        <h3>Edit Ingredient: {this.state.userIngredient.name}</h3>
        <form className="mt-2">
          <div class="form-group">
            <label for="formGroupExampleInput2">Quantity:</label>
            <input
              onChange={(e) =>
                this.setState({ quantity: Number(e.target.value) })
              }
              type="number"
              class="form-control"
              id="quantity"
              defaultValue={this.state.quantity}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Expiration Date:</label>
            <input
              onChange={(e) => this.setState({ expiration: e.target.value })}
              type="date"
              class="form-control"
              id="expirationDate"
              defaultValue={this.state.expiration}
            />
          </div>
        </form>
        <button
          className="btn btn-success"
          style={{ marginRight: 10 }}
          onClick={() =>
            this.props.edit({
              ...this.state.userIngredient,
              quantity: this.state.quantity,
              expiration_date: this.state.expiration,
            })
          }
        >
          Done
        </button>
        <button
          className="btn btn-danger"
          style={{ marginLeft: 10 }}
          onClick={() => {
            this.props.delete(this.state.userIngredient);
          }}
        >
          Delete Ingredient
        </button>
      </div>
    );
  }
}

export default IngredientEditMode;
