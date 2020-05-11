import React, { useCallback } from "react";
import styled from "styled-components";

import TextField from "@admin/components/TextField";
import Button from "@admin/components/Button";
import profileApi from "@admin/api/profile";
import useInputs from "@/hooks/useInputs";

const Login = () => {
    const [inputs, onChange] = useInputs({ email: "", password: "" });
    const handleSubmit = useCallback(
        event => {
            event.preventDefault();

            if (inputs.email && inputs.password) {
                profileApi.login(inputs.email, inputs.password);
            }
        },
        [inputs]
    );
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    placeholder="Enter email"
                    value={inputs.email}
                    onChange={value => onChange("email", value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    value={inputs.password}
                    onChange={value => onChange("password", value)}
                />
                <Button type="submit">Login</Button>
            </form>
        </Wrapper>
    );
};

export default Login;

const Wrapper = styled.div``;
