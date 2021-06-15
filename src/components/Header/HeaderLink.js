/*eslint-disable*/
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from "@material-ui/core/Icon";
// react components for routing our app without refresh
import { Link, NavLink, Route } from "react-router-dom";
import * as authActions from '../../states-management/actions/auth';
import { useHistory } from "react-router";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomButton from '../CustomButtons/Button';

// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import HomeIcon from '@material-ui/icons/Home';

// core components

import styles from "../../assets/jss/components/headerLinksStyle.js";
import { bindActionCreators } from "redux";


const LinkCustom = ({ label, to, exact, classLink, classItem, activeClassName }) => {
    return (
        <Route path={to} exact={exact} children={({ match }) => {
            const activeClass = match ? activeClassName : '';
            return (
                // Add more class with className={`${class1} ${class2}`}
                <ListItem className={classItem + " " + activeClass}>
                    <Link
                        to={to}
                        className={classLink}
                    >
                        {label}
                    </Link>
                </ListItem>
            );
        }} />
    );
}

const headers = classes => [
    {
        label: <><HomeIcon className={classes.icons} /> Home</>,
        to: '/',
        exact: true
    },
    {
        label: <><Explore className={classes.icons} /> Profile</>,
        to: '/info',
        exact: false
    },
    {
        label: <><Icon className={classes.icons}>settings</Icon> Detail</>,
        to: '/detail',
        exact: false
    }
]

const useStyles = makeStyles(styles);

function HeaderLinks(props) {
    const [title, setTitle] = useState('login');
    const history = useHistory();
    const classes = useStyles();
    const links = headers(classes);
    const { isLoggedIn, authActions: { logoutRequest } } = props;

    useEffect(() => {
        setTitle(isLoggedIn ? 'logout' : 'login');
    }, [isLoggedIn]);

    const logout = () => {
        logoutRequest();
        history.push('/login');
    }

    return (
        <List className={classes.list}>
            {links && links.map(({ label, to, exact }, index) => {
                return (
                    <ListItem className={classes.listItem} key={index}>
                        <NavLink
                            to={to}
                            exact={exact}
                            activeClassName={classes.navLinkActive}
                            className={classes.navLink}
                        >
                            {label}
                        </NavLink>
                    </ListItem>
                );
            })}
            {isLoggedIn ? (
                <ListItem className={classes.listItem}>
                    <CustomButton className={classes.navLink} color="transparent" onClick={logout}>
                        <AccountCircle className={classes.icons} /> {`${title.charAt(0).toUpperCase()}${title.slice(1)}`}
                    </CustomButton>
                </ListItem>) : (
                <ListItem className={classes.listItem}>
                    <NavLink
                        to={`/${title}`}
                        activeClassName={classes.navLinkActive}
                        className={classes.navLink}
                    >
                        <AccountCircle className={classes.icons} /> {`${title.charAt(0).toUpperCase()}${title.slice(1)}`}
                    </NavLink>
                </ListItem>)}
        </List>
    );
}

HeaderLinks.propTypes = {
    isLoggedIn: PropTypes.bool,
    authAction: PropTypes.shape({
        logoutRequest: PropTypes.func
    })
}

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
    isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);