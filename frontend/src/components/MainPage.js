import React from "react";
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
import { findAllUserIngredients } from "../services/IngredientService";
import { findAllRecipesForUser, findAvailableRecipesForUser, findFavoriteRecipesForUser } from "../services/RecipeService";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: true,
      makeableRecipes: false,
      ingredientEditing: false,
      recipeEditing: false,
      userIngredients: [],
      recipes: [],
    };
    this.refreshIngredients = this.refreshIngredients.bind(this);
    this.refreshRecipes = this.refreshRecipes.bind(this);
    this.refreshAvailableRecipes = this.refreshAvailableRecipes.bind(this);
    this.refreshFavoriteRecipes = this.refreshFavoriteRecipes.bind(this);
  }

  async componentDidMount() {
    const userIngredients = await findAllUserIngredients(
      this.props.match.params.username
    );
    const recipes = await findAllRecipesForUser(
      this.props.match.params.username
    );

    this.setState({
      userIngredients: userIngredients,
      recipes: recipes,
    });
  }

  async refreshIngredients() {
    const userIngredients = await findAllUserIngredients(
      this.props.match.params.username
    );

    this.setState({
      userIngredients: userIngredients,
    });
  }

  async refreshRecipes() {
    const recipes = await findAllRecipesForUser(
      this.props.match.params.username
    );

    this.setState({
      recipes: recipes,
    });
  }

  async refreshAvailableRecipes() {
    const recipes = await findAvailableRecipesForUser(
      this.props.match.params.username
    );

    this.setState({
      recipes: recipes,
    });
  }

  async refreshFavoriteRecipes() {
    const recipes = await findFavoriteRecipesForUser(
      this.props.match.params.username
    );

    this.setState({
      recipes: recipes,
    });
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand h1 mb-0" href="#">
            {this.props.match.params.username}'s Fridge
          </a>
          <Link class="nav-link" to="/login">
            Logout
          </Link>
        </nav>
        <div className="container">
          <div class="row mb-5">
            <div class="mr-5">
              <IngredientList
                refreshIngredients={this.refreshIngredients}
                findAllUserIngredients={findAllUserIngredients}
                userIngredients={this.state.userIngredients}
                username={this.props.match.params.username}
              />
            </div>
            <div class="ml-5">
              <RecipeList
                recipes={this.state.recipes}
                refreshRecipes={this.refreshRecipes}
                refreshAvailableRecipes={this.refreshAvailableRecipes}
                refreshFavoriteRecipes={this.refreshFavoriteRecipes}
                username={this.props.match.params.username}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
