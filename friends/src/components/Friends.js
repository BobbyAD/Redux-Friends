import React, { Component } from "react";
import { connect } from 'react-redux';
import { getData } from '../actions';

class Friends extends Component {
    componentDidMount() {
      this.props.getData();
    }
    
    render() {
        return (
            <div>
                <h1>FRIENDS LIST</h1>
                <div className="friend-list">
                    {this.props.friends &&
                        this.props.friends.map(friend => (
                            <div className='friend' key={friend.id}>
                                <p>{friend.name}</p>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
	return {
		friends: state.loginReducer.friends
	};
};

export default connect(
    mapStateToProps,
    { getData }
    )(Friends);