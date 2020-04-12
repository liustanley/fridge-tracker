import React from 'react';

class IngredientEditMode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            ingredientEdit: false,
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
                <h1 class="mt-3">Edit Your Ingredient</h1>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Ingredient:</label>
                        <input onChange={e => this.setState({ username: e.target.value })}
                            //change placeholder to whatever ingredient is
                            type="text" class="form-control" id="ingredient" placeholder={this.state.name} />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Quantity:</label>
                        <input onChange={e => this.setState({ password: e.target.value })}
                            //change placeholder to whatever ingredient is
                            type="text" class="form-control" id="quantity" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Expiration Date:</label>
                        <input onChange={e => this.setState({ confirmPassword: e.target.value })}
                            //change placeholder to whatever ingredient is
                            type="text" class="form-control" id="expirationDate" placeholder="" />
                    </div>
                </form>
                <button style={{ marginRight: 10 }}
                    onClick={() => { this.props.callback("IngredientEditMode") }}>Done</button>
                <button style={{ marginLeft: 10 }}
                    onClick={() => { this.props.callback("IngredientEditMode") }}>Delete Ingredient</button>
            </div>
        );
    }
}

export default IngredientEditMode;