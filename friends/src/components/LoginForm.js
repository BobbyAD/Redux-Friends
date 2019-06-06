import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../actions';

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges = e => {
        this.setState({ 
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value 
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected');
        });
        this.setState({username: '', password: ''})
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        name="username"
                        type="text"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                        placeholder="Username"
                    />
                    <input
                        name="password"
                        type="text"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                        placeholder="Password"
                    />
                    <input
                        onClick={this.handleSubmit}
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
  });
  
  export default connect(
    mapStateToProps,
    { login }
  )(LoginForm);