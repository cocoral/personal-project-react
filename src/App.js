import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Profile from './Profile';
import LogInForm from './LogInForm';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
      {this.props.isLoggedIn ? 
          <Profile /> : <LogInForm />
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn }
}

export default connect(mapStateToProps)(App);
