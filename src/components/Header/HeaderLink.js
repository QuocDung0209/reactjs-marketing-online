/*eslint-disable*/
import React from "react";
import Icon from "@material-ui/core/Icon";
// react components for routing our app without refresh
import { Link, NavLink, Route } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

// core components

import styles from "../../assets/jss/components/headerLinksStyle.js";


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
        label: <><Explore className={classes.icons} /> Home</>,
        to: '/',
        exact: true
    },
    {
        label: <><AccountCircle className={classes.icons} /> Profile</>,
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

export default function HeaderLinks() {
    const classes = useStyles();
    const links = headers(classes);
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
            <ListItem className={classes.listItem}>
                <NavLink
                    to='/login'
                    activeClassName={classes.navLinkActive}
                    className={classes.navLink}
                >
                    <AccountCircle className={classes.icons} /> Login
                        </NavLink>
            </ListItem>
        </List>
    );
}
