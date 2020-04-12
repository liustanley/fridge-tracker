import React from 'react';
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allRecipes: true,
            makeableRecipes: false,
            ingredientEditing: false,
            recipeEditing: false
        };
    }

    buttonGotClicked() {

    }

    render() {
        return (
            <div class="container">
                <h1 class="ml-5">MY FRIDGE:</h1>
                <div class="row">
                    <div class="mr-5" >
                        <IngredientList>

                        </IngredientList>
                    </div>
                    <div class="ml-5">
                        <RecipeList>

                        </RecipeList>
                    </div>
                </div>
            </div>
        );
    }


}

export default MainPage;