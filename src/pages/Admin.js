import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '0 1rem',
        paddingTop: '72px !important',
        width: '99%',
    }
});

const Admin = props => {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.root}>Welcome to Admin page!</h1>
        </>
    )
}

export default Admin;
