import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Profile from './Profile';
import LogInForm from './LogInForm';

const App = (props) => {
  return (
    <div className="App">
    {props.isLoggedIn ? 
        <Profile /> : <LogInForm />
    }
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn }
}

export default connect(mapStateToProps)(App);
