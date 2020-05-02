import React from "react";
import { withKnobs, select, number } from "@storybook/addon-knobs";
import styled from "styled-components";

import SVG from "@/icons/SVG";
import * as icons from "@/icons";

const IconComponents = Object.keys(icons).map(iconName => ({
    name: iconName,
    component: icons[iconName]
}));

export default {
    title: "Icon",
    component: SVG,
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: "Icons list"
    }
};

export const All = () => {
    const color = select(
        "Color",
        [
            "default",
            "primary",
            "secondary",
            "light",
            "dark",
            "white",
            "black",
            "success",
            "error"
        ],
        "default"
    );
    const direction = select(
        "Direction",
        ["default", "top", "right", "bottom", "left"],
        "default"
    );
    const size = number("Size", 1);
    return (
        <Wrapper>
            {IconComponents.map(icon => {
                return (
                    <div className="icon-item" key={icon.name}>
                        <icon.component
                            color={color}
                            direction={direction}
                            size={size}
                        />
                        <div className="icon-item__name">{icon.name}</div>
                    </div>
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;

    .icon-item {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        text-align: center;
        border: 1px solid transparent;
        padding: 10px;
        margin: 15px;

        &:hover {
            border-color: #eeeeee;
        }

        &__name {
            font-size: 12px;
            font-weight: bold;
            margin: 0 0 5px;
            color: #999;
        }

        svg {
            display: block;
            margin: 0 auto;
            padding: 16px;
            font-size: 40px;
            color: #333333;
        }
    }
`;
