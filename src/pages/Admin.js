import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components core
import Sidebar from '../components/Sidebar/Sidebar';
import CreateProduct from '../components/Products/CreateProduct';
import AddProductDetail from '../components/Products/AddProductDetail';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

import { container } from '../assets/jss/base';

import bgImage from '../assets/images/sidebar-2.jpg';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '0 1rem',
        paddingTop: '72px !important',
        width: '99%',
        position: "relative",
        top: "0",
        height: "100vh"
    },
    content: {
        width: "calc(100% - 260px)",
        float: "right",
    },
    container,
});

const routes = [
    {
        path: "/create-product",
        name: "Create Product",
        icon: Dashboard,
        component: CreateProduct,
        layout: "/admin"
    },
    {
        path: "/add-product-detail",
        name: "Add Product Deatail",
        icon: Dashboard,
        component: AddProductDetail,
        layout: "/admin"
    },
];

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
            return null;
        })}
        <Redirect from="/admin" to="/admin/create-product" />
    </Switch>
);

const Admin = ({ ...rest }) => {
    // styles
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Sidebar
                routes={routes}
                image={bgImage}
                {...rest}
            />
            <div className={classes.content}>
                <div className={classes.container}>{switchRoutes}</div>
            </div>
        </div>
    )
}

export default Admin;
