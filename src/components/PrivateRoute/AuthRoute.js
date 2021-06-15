import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = props => {
    const { isLoggedIn } = props;
    console.log(isLoggedIn);
    if (isLoggedIn) {
        return <Redirect to='/home' />;
    }

    return <Route {...props} />;
}

const mapStateToProps = ({ isLoggedIn }) => ({
    isLoggedIn
});

export default connect(mapStateToProps)(AuthRoute);