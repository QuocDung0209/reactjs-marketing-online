import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, FormSpy } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import * as authActions from '../states-management/actions/auth';

// @material-ui/core components
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core';


// core components
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';
import CardBody from '../components/Card/CardBody';
import Input from '../components/CustomInput/Input';
import CustomButton from '../components/CustomButtons/Button';
import { sleep, composeValidators, required, minLength } from '../helpers/validators';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ededed',
        height: '100%',
        paddingTop: '200px'
    },
    widthCard: {
        width: '400px',
        margin: 'auto',
    },
    paddingTop: {
        paddingTop: '0.75rem'
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        marginBottom: "15px"
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    pageHeader: {
        minHeight: "100vh",
        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        },
        "& footer li a,& footer li a:hover,& footer li a:active": {
            color: "#FFFFFF"
        },
        "& footer": {
            position: "absolute",
            bottom: "0",
            width: "100%"
        }
    },
}))

function LoginPage(props) {
    const [valuesPass, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const classes = useStyles();
    const history = useHistory();
    const { isLoggedIn } = props;

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/');
        }
    }, [history, isLoggedIn])

    const onSubmit = async values => {
        await sleep(500);
        const { authActions } = props;
        const { loginRequest } = authActions;
        loginRequest({ user: values.username, password: values.password });
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...valuesPass, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...valuesPass, showPassword: !valuesPass.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <Card className={classes.widthCard}>
                <CardHeader color="info" className={classes.cardHeader}>
                    <h1>Login</h1>
                    {/* <div className={classes.socialLine}>
                    <CustomButton
                        justIcon
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                    >
                        <i className={"fa fa-twitter"} />
                    </CustomButton>
                    <CustomButton
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                    >
                        <i className={"fa fa-facebook"} />
                    </CustomButton>
                    <CustomButton
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                    >
                        <i className={"fa fa-google-plus-g"} />
                    </CustomButton>
                </div> */}
                </CardHeader>
                {/* <p className={classes.divider}>Or Be Classical</p> */}
                <CardBody>
                    <Form
                        onSubmit={onSubmit}
                        subscription={{ submitting: true, pristine: true }}
                        render={({
                            submitError,
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values
                        }) => (
                            <form onSubmit={handleSubmit} className={classes.paddingTop}>
                                <Input
                                    name="username"
                                    label="Username"
                                    placeholder="Your username or email"
                                    validate={composeValidators(required, minLength(5))}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                />
                                <Input
                                    name="password"
                                    label="Password"
                                    placeholder="Your password"
                                    validate={composeValidators(required, minLength(5))}
                                    type={valuesPass.showPassword ? 'text' : 'password'}
                                    value={valuesPass.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {valuesPass.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <div style={{ marginLeft: '130px', marginTop: '0.75rem' }}>
                                    <CustomButton type="submit" color="info" outline={true} >Sign In</CustomButton>
                                </div>
                                {/* <FormSpy subscription={{ values: true }}>
                                {({ values }) => (
                                    <pre>
                                        {JSON.stringify(values, 0, 2)}
                                    </pre>
                                )}
                            </FormSpy> */}
                            </form>
                        )}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

LoginPage.propTypes = {
    authActions: PropTypes.shape({
        loginRequest: PropTypes.func,
    }),
    isLoggedIn: PropTypes.bool,
}

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
    isLoggedIn
});
const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);