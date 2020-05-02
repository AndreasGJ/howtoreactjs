import React from "react";

import SVG from "@/icons/SVG";

const ArrowCircle = (props = {}) => {
    return (
        <SVG {...props}>
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
        </SVG>
    );
};

export default ArrowCircle;

ArrowCircle.propTypes = SVG.propTypes;
ArrowCircle.defaultProps = SVG.defaultProps;
