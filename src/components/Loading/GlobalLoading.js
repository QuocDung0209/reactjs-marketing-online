import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingIcon from '../../assets/images/loading.gif';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 99,
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
    },
    icon: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        width: 100,
    }
})

const GlobalLoading = props => {
    const classes = useStyles();

    const { loading } = props;

    if (!loading) {
        return null;
    }

    return (
        <div className={classes.root}>
            <img className={classes.icon} src={LoadingIcon} alt="Global Loading" />
        </div>
    )
}

GlobalLoading.propTypes = {
    loading: PropTypes.bool
}

const mapStateToProps = ({ auth: { loading } }) => ({
    loading
})

export default connect(mapStateToProps)(GlobalLoading);