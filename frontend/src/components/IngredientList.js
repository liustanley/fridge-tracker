import React from "react";
import IngredientEditMode from "./IngredientEditMode";
import IngredientAddMode from "./IngredientAddMode";
import IngredientNewMode from "./IngredientNewMode";
import IngredientBox from "./IngredientBox";
import {
  updateUserIngredient,
  deleteUserIngredient,
  createUserIngredient,
  createIngredient,
} from "../services/IngredientService";

class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientEdit: false,
      ingredientAdd: false,
      ingredientNew: false,
      currentIngredient: {},
    };
    this.editButtonGotClicked = this.editButtonGotClicked.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.newIngredient = this.newIngredient.bind(this);
  }

  editButtonGotClicked(input) {
    this.setState({ ingredientEdit: true, currentIngredient: input });
  }

  newIngredientButtonGotClicked() {}

  edit(userIngredient) {
    updateUserIngredient(
      userIngredient.ingredient_id,
      userIngredient,
      userIngredient.username
    ).then(this.setState({ ingredientEdit: false }));
  }

  delete(userIngredient) {
    deleteUserIngredient(
      userIngredient.ingredient_id,
      userIngredient.username
    ).then(() => {
      this.setState({ ingredientEdit: false });
      this.props.refreshIngredients();
    });
  }

  add(userIngredient) {
    createUserIngredient(userIngredient, userIngredient.username).then(() => {
      this.setState({ ingredientAdd: false });
      this.props.refreshIngredients();
    });
  }

  newIngredient(ingredient) {
    createIngredient(ingredient).then(() => {
      this.setState({ ingredientNew: false });
    });
  }

  render() {
    if (this.state.ingredientEdit) {
      return (
        <div>
          <h1 class="mt-4">What's in my fridge?</h1>
          <IngredientEditMode
            edit={this.edit}
            delete={this.delete}
            userIngredient={this.state.currentIngredient}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1 class="mt-4">What's in my fridge?</h1>
          <button
            className="btn btn-primary mr-3"
            onClick={() => this.setState({ ingredientAdd: true })}
          >
            Add Ingredient to Fridge
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => this.setState({ ingredientNew: true })}
          >
            New Ingredient
          </button>
          {this.state.ingredientAdd && (
            <IngredientAddMode
              add={this.add}
              userIngredient={this.state.currentIngredient}
              username={this.props.username}
            />
          )}
          {this.state.ingredientNew && (
            <IngredientNewMode
              newIngredient={this.newIngredient}
              userIngredient={this.state.currentIngredient}
              username={this.props.username}
            />
          )}
          {this.props.userIngredients.map((userIngredient) => {
            return (
              <IngredientBox
                key={userIngredient.username + userIngredient.ingredient_id}
                callback={this.editButtonGotClicked}
                userIngredient={userIngredient}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default IngredientList;
