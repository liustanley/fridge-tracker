import React from 'react';
import RecipeBox from "./RecipeBox";

class RecipeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredientEdit: false,
            currentIngredient: ""
        };
    }

    addButtonClicked() {

    }

    allRecipesButtonClicked() {

    }

    whatToEatButtonClicked() {

    }

    render() {
        return (
            <div class="container">
                <h1 class="mt-5">My Recipes</h1>
                <button style={{ marginLeft: 10, marginRight: 10 }} onClick={this.addButtonClicked()}>New Recipe</button>
                <button style={{ marginLeft: 10, marginRight: 10 }} onClick={this.allRecipesButtonClicked()}>All Recipes</button>
                <button style={{ marginLeft: 10, marginRight: 10 }} onClick={this.whatToEatButtonClicked()}>What to eat?</button>
                <div class="mb-5" style={{ width: 400, height: 100, borderColor: "Red" }}>
                    <RecipeBox></RecipeBox>
                    <RecipeBox></RecipeBox>
                    <RecipeBox></RecipeBox>
                </div>
            </div>
        );
    }
}

export default RecipeList;