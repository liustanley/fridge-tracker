import React from 'react';

class IngredientBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    addButtonClick() {
        this.state.ingredientEdit = true;
        //TO-DO: add new ingredient with empty values
    }

    editButtonClick() {
        this.state.ingredientEdit = true;
    }

    render() {
        return (
            <div style={{ width: 400, height: 80, borderStyle: "solid", marginTop: 10, marginBottom: 10 }} class="row">
                <h1>{this.props.name}</h1>
                <button style={{ marginLeft: 10 }}
                    onClick={() => { this.props.callback(this.props.name) }}>Edit</button>
            </div>
        );
    }
}




export default IngredientBox;