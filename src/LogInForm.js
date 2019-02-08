import React, { Component } from 'react';

class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="form-login">
                <header className="App-header">
                    Hello, {this.props.username}.
                </header>
                <h2>Log In:</h2>
                <form id="log-in-form">
                <div>
                    <input type="text" name="userName" placeholder="User Name"></input>
                </div>
                    <div><input type="password" name="pw" placeholder="Password"></input></div>
                    <button onClick={this.props.logInHandler}>Submit</button>
                </form>
            </div>
        );
    }
}

export default LogInForm;
