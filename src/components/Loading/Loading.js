import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor
} from '../../assets/jss/base.js';

const useStylesFacebook = makeStyles((theme) => ({
    absolute: {
        position: 'absolute'
    },
    relative: {
        position: 'relative'
    },
    block: {
        display: 'block'
    },
    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    default: {
        color: '#1a90ff',
    },
    primary: {
        color: primaryColor
    },
    info: {
        color: infoColor
    },
    success: {
        color: successColor
    },
    warning: {
        color: warningColor
    },
    danger: {
        color: dangerColor
    },
    rose: {
        color: roseColor
    },
    circle: {
        strokeLinecap: 'round',
    },
}));

export default function Loading(props) {
    const classes = useStylesFacebook();
    const { size, thickness, color, block, position, ...rest } = props;
    const loadingClasses = classNames({
        [classes.top]: true,
        [classes[color]]: color
    })
    const rootClasses = classNames({
        [classes[position]]: position,
        [classes.block]: block
    })
    return (
        <span className={rootClasses}>
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                size={size}
                thickness={thickness}
                {...rest}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={loadingClasses}
                classes={{
                    circle: classes.circle,
                }}
                size={size}
                thickness={thickness}
                {...rest}
            />
        </span>
    )
}

Loading.defaultProps = {
    size: 20,
    thickness: 5,
    color: "default",
    block: false,
    position: 'absolute'
}

Loading.propTypes = {
    size: PropTypes.number,
    thickness: PropTypes.number,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "default"
    ]),
    block: PropTypes.bool,
    position: PropTypes.string
}