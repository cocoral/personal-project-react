import React, { Component } from 'react';

import { connect } from 'react-redux';
import { logInHandler } from './actions'

class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : null
        }
    }

    handleUserLogin = e =>{
        e.preventDefault();
        this.props.logInHandler(this.state.userName);
        console.log("props:", this.props)
    }

    updateUserName = e => this.setState({ userName: e.target.value})

    render() {
        return (
            <div className="form-login">
                <header className="App-header">
                    <p>Hello, insert your github handler below to view your repos.</p>
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

const mapStateToProps = (state) =>{
    return {username: state.username}
}


const mapDispatchToProps = {
    logInHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
 