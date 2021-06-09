import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// core components

import buttonStyle from "../../assets/jss/components/buttonStyle.js";

const makeComponentStyles = makeStyles(() => ({
    ...buttonStyle
}));

// React.forwardRef tạo ra một “thành phần” (component) React, giúp “chuyển tiếp” (forwards)
// “thuộc tính” (attribute) ref mà nó nhận được cho các thành phần khác bên dưới “cây” (tree).
// Kỹ thuật này không thật sự phổ biến nhưng lại đặc biệt hữu ích trong hai tình huống sau:

// - Chuyển tiếp refs tới các “thành phần” DOM (Forwarding refs to DOM components)
// - Chuyển tiếp refs trong các “thành phần” bậc cao (Forwarding refs in higher-order-components)

// React.forwardRef chấp nhận một “hàm biểu diễn” (rendering function) là một đối số.
// React sẽ gọi đến hàm này với hai đối số là props và ref.
// Hàm này nên trả về một “nút” (node) React.

const RegularButton = React.forwardRef((props, ref) => {
    const {
        color,
        round,
        outline,
        children,
        fullWidth,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        ...rest
    } = props;

    const classes = makeComponentStyles();

    const btnClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [classes.outline]: outline,
        [className]: className
    });
    return (
        <Button {...rest} ref={ref} className={btnClasses}>
            {children}
        </Button>
    );
});

RegularButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "facebook",
        "twitter",
        "google",
        "github",
        "transparent"
    ]),
    size: PropTypes.oneOf(["sm", "lg"]),
    simple: PropTypes.bool,
    round: PropTypes.bool,
    outline: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.bool,
    justIcon: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
};

export default RegularButton;
