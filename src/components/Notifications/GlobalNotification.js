import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noticationActions from '../../states-management/actions/notication';

// @material-ui core components
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function GlobalNotification(props) {
    const classes = useStyles();

    const { message, noticeType, notifyActions: { clearNotification } } = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        clearNotification();
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={!!message}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={noticeType}>
                    <AlertTitle>{`${noticeType.charAt(0).toUpperCase()}${noticeType.slice(1)}`}</AlertTitle>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

GlobalNotification.propTypes = {
    message: PropTypes.string,
    noticeType: PropTypes.oneOf([
        'error',
        'warning',
        'info',
        'success',
    ]),
    notifyActions: PropTypes.shape({
        clearNotification: PropTypes.func
    }),
}

const mapStateToProps = ({ notification: { message, noticeType } }) => ({
    message,
    noticeType,
});

const mapDispatchToProps = dispatch => ({
    notifyActions: bindActionCreators(noticationActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNotification)
