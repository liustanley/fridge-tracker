import React from 'react';
import RecipeBox from "./RecipeBox";
import RecipeEditMode from "./RecipeEditMode";

class RecipeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipeEdit: false,
            currentRecipe: ""
        };
        this.editButtonGotClicked = this.editButtonGotClicked.bind(this);
        this.doneButtonGotClicked = this.doneButtonGotClicked.bind(this);
    }

    addButtonClicked() {
        //this.setState({recipeEdit: true, currentRecipe: ""});
    }

    allRecipesButtonClicked() {

    }

    whatToEatButtonClicked() {

    }

    editButtonGotClicked(input) {
        this.setState({recipeEdit: true, currentRecipe: input})
    }

    doneButtonGotClicked() {
        this.setState({recipeEdit: false})
    }

    render() {
        if (this.state.recipeEdit) {
            return (
                <div class="container">
                    <h1 class="mt-5">My Recipes</h1>
                    <div class="mb-5" style={{ width: 400, height: 100, borderColor: "Red" }}>
                        <RecipeEditMode callback={this.doneButtonGotClicked} name={this.state.currentRecipe}>
                        </RecipeEditMode>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="container">
                    <h1 class="mt-5">My Recipes</h1>
                    {
                    // for some reason, this new recipe button gets continuously clicked
                    }
                    <button style={{ marginLeft: 10, marginRight: 10 }} onClick={this.addButtonClicked}>New Recipe</button>
                    <button style={{ marginLeft: 10, marginRight: 10 }} onClick={this.allRecipesButtonClicked}>All Recipes</button>
                    <button style={{ marginLeft: 10, marginRight: 10 }} onClick={this.whatToEatButtonClicked}>What to eat?</button>
                    <div class="mb-5" style={{ width: 400, height: 100, borderColor: "Red" }}>
                        {this.props.recipes.map(recipe => {
                            return (
                                <RecipeBox callback={this.editButtonGotClicked} name={recipe.name}/>
                            )
                        })}
                        {/* <RecipeBox callback={this.editButtonGotClicked} name={"Cheese Omelette"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Chocolate Milk"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox>
                        <RecipeBox callback={this.editButtonGotClicked} name={"Cake"}></RecipeBox> */}
                    </div>
                </div>
            );
        }
    }
}

export default RecipeList;