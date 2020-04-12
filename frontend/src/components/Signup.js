import React from 'react';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: ""
        };
        this.buttonGotClicked = this.buttonGotClicked.bind(this);
    }

    buttonGotClicked() {
        console.log("username = " + this.state.username);
        console.log("password = " + this.state.password);
        console.log("confirmPassword = " + this.state.confirmPassword);
        if (this.state.password != this.state.confirmPassword) {
            alert("Please make sure your passwords match.");
        }
    }

    render() {
        return (
            <div class="container">
                <h1 class="mt-5">Signup</h1>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Enter Username:</label>
                        <input onChange={e => this.setState({ username: e.target.value })}
                            type="text" class="form-control" id="enterUsername" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Enter Password:</label>
                        <input onChange={e => this.setState({ password: e.target.value })}
                            type="text" class="form-control" id="enterPassword" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Confirm Password:</label>
                        <input onChange={e => this.setState({ confirmPassword: e.target.value })}
                            type="text" class="form-control" id="confirmPassword" placeholder="Confirm Password" />
                    </div>
                </form>
                <button onClick={this.buttonGotClicked}>Create Account</button>
            </div>
        );
    }
}

export default Signup;