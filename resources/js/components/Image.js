import React from "react";
import styled from "styled-components";
import clsx from "clsx";

/**
 * Name: Image
 */
const Image = ({ src, ratio, alt, loading = "lazy", shadow, rounded }) => {
    return (
        <Wrapper
            className={clsx("image", {
                shadow: shadow === true || shadow === "default",
                "shadow-sm": shadow === "sm",
                "shadow-md": shadow === "md",
                "shadow-lg": shadow === "lg",
            })}
            ratio={ratio}
        >
            <div
                className={clsx("image__inner", {
                    rounded: rounded === true || rounded === "default",
                    "rounded-sm": rounded === "sm",
                    "rounded-md": rounded === "md",
                    "rounded-lg": rounded === "lg",
                })}
            >
                <img src={src} alt={alt} loading={loading} />
            </div>
        </Wrapper>
    );
};

export default React.memo(Image);

const Wrapper = styled.div`
    ${(props) => {
        if (!props.ratio) return;
        const args = props.ratio.split(/(:|\/)/);
        const procent = (parseInt(args[2]) / parseInt(args[0])) * 100;

        return `.image__inner {
            position: relative;
            height: 0px;
            overflow: hidden;
            padding-top: ${procent}%;
        }
        .image__inner img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        `;
    }}
`;
