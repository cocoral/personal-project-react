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

  logInHandler = userName =>{
    this.setState({
      isLoggedIn: true,
      username: userName
    })
  };

  
  render() {
    
    return (
      <div className="App">
      {this.state.isLoggedIn ? 
          <Profile username={this.state.username}/> : <LogInForm username={this.state.username}/>
      }
      </div>
    );
  }
}

export default App;
