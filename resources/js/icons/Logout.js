import React from "react";

import SVG from "@/icons/SVG";

const Logout = (props = {}) => {
    return (
        <SVG {...props}>
            <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z" />
        </SVG>
    );
};

export default Logout;

Logout.propTypes = SVG.propTypes;
Logout.defaultProps = SVG.defaultProps;
