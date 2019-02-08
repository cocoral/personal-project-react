import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import LogInForm from './LogInForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      username: null
    }
  }
  logInHandler = e =>{
    e.preventDefault();
    //Should validate the login
    this.setState({
      isLoggedIn: true,
      username: "testUser"
    })
  };
  
  render() {
    
    return (
      <div className="App">
      {this.state.isLoggedIn ? 
          <Profile username={this.state.username}/> : <LogInForm logInHandler={this.logInHandler.bind(this)} username={this.state.username}/>
      }
      </div>
    );
  }
}

export default App;
