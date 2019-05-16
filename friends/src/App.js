import React from 'react';
import {Route} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Friends from './components/Friends';
import PrivateRoute from './PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginForm} />
      <PrivateRoute exact path='/protected' component={Friends} />
    </div>
  );
}

export default App;
