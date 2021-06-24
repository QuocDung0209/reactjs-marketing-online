import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { useLocation } from 'react-router-dom';

const AuthRoute = props => {
    const location = useLocation();
    const { isLoggedIn } = props;
    if (!isLoggedIn) {
        return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
    }

    return <Route {...props} />;
}

AuthRoute.propTypes = {
    isLoggedIn: PropTypes.bool,
}

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
    isLoggedIn
});

export default connect(mapStateToProps)(AuthRoute);