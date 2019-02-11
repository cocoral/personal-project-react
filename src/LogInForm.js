import React, { Component } from 'react';

class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : null
        }
    }

    handleUserLogin = e =>{
        e.preventDefault();
        this.props.logInHandler(this.state.userName)
    }

    updateUserName = e => this.setState({ userName: e.target.value})

    render() {
        return (
            <div className="form-login">
                <header className="App-header">
                    Hello, {this.props.username}.
                </header>
                <h2>Log In:</h2>
                <form id="log-in-form">
                <div>
                    <input type="text" name="userName" placeholder="User Name" onChange = {this.updateUserName}></input>
                </div>
                    <button onClick={this.handleUserLogin}>Submit</button>
                </form>
            </div>
        );
    }
}

export default LogInForm;
