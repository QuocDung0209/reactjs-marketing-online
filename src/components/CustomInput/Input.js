import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { dangerColor } from '../../assets/jss/base';

// @material-ui/core components
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../Loading/Loading';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '255px',
        height: '40px',
        color: "rgba(0, 0, 0, 0.87)",
        cursor: 'text',
        display: 'inline-flex',
        position: 'relative',
        fontSize: '1rem',
        boxSizing: 'border-box',
        alignItems: 'center',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '400',
        lineHeight: '1.1875em',
        letterSpacing: '0.00938em',
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    invalid: {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23ac1f2d'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23ac1f2d' stroke='none'/%3e%3c/svg%3e")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right calc(0.5rem) center",
        backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
    },
    tooltip: {
        backgroundColor: dangerColor,
        color: '#FFFFFF',
        boxShadow: theme.shadows[1],
        fontSize: 12,
    },
    arrow: {
        color: dangerColor
    },
    widthCard: {
        width: '400px',
        margin: 'auto',
        marginTop: '50px'
    }
}))

export default function Input(props) {
    const classes = useStyles();
    const {
        name,
        label,
        placeholder,
        validate,
        startAdornment,
        endAdornment,
        type,
        textarea,
        value,
        onChange,
        loading
    } = props
    return (
        <Field name={name} validate={validate}>
            {({ input, meta }) => (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item lg={3}>
                        <label>{label}</label>
                    </Grid>
                    <Grid item lg={9}>
                        <Tooltip arrow title={meta.error && meta.touched ? meta.error : ''} placement="right" classes={{
                            tooltip: classes.tooltip,
                            arrow: classes.arrow
                        }}>
                            {textarea
                                ? <textarea
                                    value={value}
                                    onChange={onChange}
                                    placeholder={placeholder}
                                    rows={4}
                                    cols={70}
                                    className={classes.root + meta.error && meta.touched ? classes.invalid : ''}
                                    {...input}
                                />
                                : <OutlinedInput
                                    type={type}
                                    value={value}
                                    onChange={onChange}
                                    placeholder={placeholder}
                                    startAdornment={startAdornment}
                                    endAdornment={endAdornment}
                                    classes={{
                                        root: classes.root,
                                    }}
                                    error={meta.error && meta.touched}
                                    inputProps={{
                                        className: meta.error && meta.touched ? classes.invalid : ''
                                    }}
                                    {...input}
                                />}
                        </Tooltip>
                        {loading && meta.validating && <span><Loading /></span>}
                    </Grid>
                </Grid>
            )}
        </Field>
    )
}

Input.defaultProp = {
    name: 'textInput',
    type: 'text',
    textarea: false,
    value: '',
    loading: false
}

Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    textarea: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    validate: PropTypes.func,
    startAdornment: PropTypes.node,
    endAdornment: PropTypes.node,
    loading: PropTypes.bool
}