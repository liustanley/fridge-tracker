import React from 'react';

class RecipeEditMode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            currentIngredient: ""
        };
    }

    editButtonClick() {
        //update the ingredient with the new values
    }

    deleteButtonClick() {
        //delete the ingredient from the DB
    }

    render() {
        return (
            <div class="container">
                <h1 class="mt-3">Edit Your Recipe</h1>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Recipe:</label>
                        <input onChange={e => this.setState({ username: e.target.value })}
                            //change placeholder to whatever Recipe is
                            type="text" class="form-control" id="recipe" placeholder={this.state.name} />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Description:</label>
                        <input onChange={e => this.setState({ password: e.target.value })}
                            //change placeholder to whatever Description is
                            type="text" class="form-control" id="description" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Preparation Time:</label>
                        <input onChange={e => this.setState({ confirmPassword: e.target.value })}
                            //change placeholder to whatever Prep time is
                            type="text" class="form-control" id="preparationTime" placeholder="" />
                    </div>
                </form>
                <button style={{ marginRight: 10 }}
                    onClick={() => { this.props.callback("RecipeEditMode") }}>Done</button>
                <button style={{ marginLeft: 10 }}
                    onClick={() => { this.props.callback("RecipeEditMode") }}>Delete Recipe</button>
            </div>
        );
    }
}

export default RecipeEditMode;