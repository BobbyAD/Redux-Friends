import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Friends from './components/Friends';
import PrivateRoute from './PrivateRoute';

import './App.css';

class App extends React.Component {
    logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.logout}>LOGOUT</button>
                <Route exact path="/" component={LoginForm} />
                <PrivateRoute exact path='/protected' component={Friends} />
            </div>
        );
    }
}

export default App;
