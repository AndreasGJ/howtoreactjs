import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const TextField = ({
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    ...props
}) => {
    return (
        <Wrapper className="form-group">
            {label && <label className="form-group__label">{label}</label>}
            <input
                type={type}
                className={classNames(
                    "form-group__input",
                    "form-group__input--" + type
                )}
                placeholder={placeholder}
                value={value}
                onChange={event => onChange(event.target.value, event)}
                {...props}
            />
        </Wrapper>
    );
};

export default TextField;

const Wrapper = styled.div`
    margin: 20px 0 30px;

    .form-group__label {
        font-size: 15px;
        font-weight: bold;
        margin: 0 0 6px;
    }

    .form-group__input {
        display: block;
        width: 100%;
        padding: 10px 16px;
        font-size: 16px;
        background: #ffffff;
        border: 1px solid #ccc;
    }
`;
