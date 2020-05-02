import React from "react";

import SVG from "@/icons/SVG";

const ArrowLine = (props = {}) => {
    return (
        <SVG {...props} fill-rule="evenodd" clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </SVG>
    );
};

export default ArrowLine;

ArrowLine.propTypes = SVG.propTypes;
ArrowLine.defaultProps = SVG.defaultProps;
