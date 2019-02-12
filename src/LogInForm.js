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
        console.log(this.props)
        this.props.logInHandler(this.state.userName);
    }

    updateUserName = e => this.setState({ userName: e.target.value})

    render() {
        console.log(this.props.logInHandler)
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
const mapStateToProps = (state) =>{
    console.log(state);
    return {username: state.username}
}


const mapDispatchToProps = {
    logInHandler
}

// export default LogInForm;
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
 