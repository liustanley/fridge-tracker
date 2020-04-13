import React from 'react';
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
import { findAllUserIngredients } from "../services/IngredientService";
import { findAllRecipesForUser } from "../services/RecipeService";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allRecipes: true,
            makeableRecipes: false,
            ingredientEditing: false,
            recipeEditing: false,
            userIngredients: [],
            recipes: []
        };
    }

    async componentDidMount() {
        const userIngredients = await findAllUserIngredients(this.props.match.params.username);
        const recipes = await findAllRecipesForUser(this.props.match.params.username);

        this.setState({
            userIngredients: userIngredients,
            recipes: recipes
        })
    }

    buttonGotClicked() {

    }

    render() {
        return (
            <div class="container">
                <h1 class="ml-5">{this.props.match.params.username}'s Fridge</h1>
                <div class="row">
                    <div class="mr-5" >
                        <IngredientList userIngredients={this.state.userIngredients} />
                    </div>
                    <div class="ml-5">
                        <RecipeList recipes={this.state.recipes} />
                    </div>
                </div>
            </div>
        );
    }


}

export default MainPage;