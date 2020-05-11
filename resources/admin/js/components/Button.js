import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

/**
 * Use `Button` to show the user a CTA which is clickable.
 */
const Button = ({
    type,
    variant,
    color,
    noMargin = false,
    children,
    ...props
}) => {
    return (
        <Wrapper
            type={type}
            className={classNames(
                "button",
                "button--variant-" + variant,
                "button--color-" + color,
                {
                    "button--no-margin": noMargin
                }
            )}
            {...props}
        >
            {children}
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.button`
    background: none;
    border: 1px solid #ccc;
    padding: 10px 30px;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: none;
    cursor: pointer;

    &.button--no-margin {
        margin: 0;
    }
    &.button--color-default {
        background: #ffffff;
        color: #111111;

        &:hover {
            border-color: #777777;
        }
    }

    &.button--color-primary {
        background: #777777;
        border-color: #777777;
        color: #ffffff;

        &:hover {
            background: #444444;
            border-color: #444444;
        }
    }

    &.button--color-secondary {
        background: #333333;
        border-color: #333333;
        color: #ffffff;

        &:hover {
            background: #000000;
            border-color: #000000;
        }
    }

    &.button--variant-fab {
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }

    &.button--variant-fab-contained {
        border-radius: 30px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-left: 23px;
        padding-right: 23px;

        > svg {
            margin: 0 7px;
        }
    }
`;

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]).isRequired,
    variant: PropTypes.oneOf(["default", "fab", "fab-contained"]).isRequired,
    color: PropTypes.oneOf(["default", "primary", "secondary"]).isRequired,
    noMargin: PropTypes.bool,
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: "button",
    variant: "default",
    color: "default",
    noMargin: false
};
