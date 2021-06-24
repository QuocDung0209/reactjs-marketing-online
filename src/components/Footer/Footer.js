import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        bottom: 0,
        backgroundColor: '#0561AD',
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        padding: '15px 0',
    }
})

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <b>&copy; {1900 + new Date().getYear()}{" "} - KenjiNguyen</b>
        </footer>
    )
}