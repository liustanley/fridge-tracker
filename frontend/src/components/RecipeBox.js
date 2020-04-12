import React from 'react';

class RecipeBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredientEdit: false,
            currentIngredient: ""
        };
    }

    editButtonClick() {
        
    }

    render() {
        return (
            <div style={{ width: 500, height: 100, borderStyle: "solid", marginTop: 10, marginBottom: 10 }} class="row">
                <h1>{this.props.name}</h1>
                <button class="mr-1" style={{ marginLeft: 10 }} onClick={() => { this.props.callback(this.props.name) }}>Edit</button>
            </div>
        );
    }
}




export default RecipeBox;