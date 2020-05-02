import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "@/theme";

const rotates = {
    left: "180deg",
    top: "-90deg",
    bottom: "90deg"
};

/**
 * Use `SVG` to show an SVG icon. It will help you rotate, color and resize the icon.
 */
const SVG = ({ viewBox, children, ...props }) => (
    <Wrapper viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" {...props}>
        {children}
    </Wrapper>
);

export default SVG;

const Wrapper = styled.svg`
    display: inline-block;
    flex-shrink: 0;
    user-select: none;
    width: ${props => props.size || 1}em;
    height: ${props => props.size || 1}em;

    ${props =>
        props.color && colors[props.color]
            ? { fill: colors[props.color] }
            : { fill: "currentColor" }}
    ${props =>
        props.direction && rotates[props.direction]
            ? { transform: "rotate(" + rotates[props.direction] + ")" }
            : {}}
`;

SVG.propTypes = {
    direction: PropTypes.oneOf(["right", "left", "top", "bottom"]).isRequired,
    color: PropTypes.oneOfType([
        "inherit",
        "primary",
        "secondary",
        "light",
        "dark",
        "white",
        "black",
        "success",
        "error"
    ]),
    size: PropTypes.number.isRequired,
    viewBox: PropTypes.string.isRequired
};

SVG.defaultProps = {
    direction: "right",
    color: "inherit",
    size: 1,
    viewBox: "0 0 24 24"
};
