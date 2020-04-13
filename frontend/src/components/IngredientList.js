import React from 'react';
import IngredientEditMode from "./IngredientEditMode";
import IngredientBox from "./IngredientBox";


class IngredientList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredientEdit: false,
            currentIngredient: ""
        };
        this.editButtonGotClicked = this.editButtonGotClicked.bind(this);
        this.doneButtonGotClicked = this.doneButtonGotClicked.bind(this);
    }

    editButtonGotClicked(input) {
        this.setState({ingredientEdit: true, currentIngredient: input})
    }

    doneButtonGotClicked() {
        this.setState({ingredientEdit: false})
    }

    newIngredientButtonGotClicked() {

    }

    render() {
        if (this.state.ingredientEdit) {
            return (
                <div class="container">
                    <h1 class="mt-5">What's in my fridge?</h1>
                    <div class="mb-5" style={{ width: 400, height: 100, borderColor: "Red" }}>
                        <IngredientEditMode callback={this.doneButtonGotClicked} name={this.state.currentIngredient}>
                        </IngredientEditMode>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="container">
                    <h1 class="mt-5">What's in my fridge?</h1>
                    <button onClick={this.newIngredientButtonGotClicked}>New Ingredient</button>
                    {this.props.userIngredients.map(userIngredient => {
                        return (
                            <IngredientBox callback={this.editButtonGotClicked} name={userIngredient.ingredient_id} />
                        )
                    })}
                    {/* <div>
                        <IngredientBox callback={this.editButtonGotClicked} name={"Cheese"}>
                        </IngredientBox>
                        <IngredientBox callback={this.editButtonGotClicked} name={"Carrots"}>
                        </IngredientBox>
                        <IngredientBox callback={this.editButtonGotClicked} name={"Milk"}>
                        </IngredientBox>
                    </div> */}
                </div>

            );
        }
    }
}

export default IngredientList;