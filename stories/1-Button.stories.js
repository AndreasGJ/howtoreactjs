import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Button from "@/components/Button";
import { Arrow } from "@/icons";

export default {
    title: "Button",
    component: Button,
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: "Links, buttons or other CTA elements"
    }
};

export const All = () => {
    const onClick = action("clicked");
    const buttons = [
        { variant: "default", color: "default", text: "Default" },
        { variant: "default", color: "primary", text: "Default - Primary" },
        { variant: "default", color: "secondary", text: "Default - Secondary" },
        { variant: "fab-contained", color: "default", text: "Fab contained" },
        {
            variant: "fab-contained",
            color: "primary",
            text: "Fab contained - Primary"
        },
        {
            variant: "fab-contained",
            color: "secondary",
            text: "Fab contained - Secondary"
        },
        { variant: "fab", color: "default", text: "F" },
        {
            variant: "fab",
            color: "primary",
            text: "F-P"
        },
        {
            variant: "fab",
            color: "secondary",
            text: "F-S"
        }
    ];

    return (
        <div>
            {buttons.map(button => {
                return (
                    <Button
                        onClick={onClick}
                        variant={button.variant}
                        color={button.color}
                    >
                        {button.text || button.variant}
                    </Button>
                );
            })}
        </div>
    );
};

export const Fab = () => {
    const onClick = action("clicked");
    const buttonColor = select(
        "Color",
        ["default", "primary", "secondary"],
        "default"
    );

    return (
        <Button onClick={onClick} variant="fab" color={buttonColor}>
            <Arrow direction="left" />
        </Button>
    );
};

export const FabContained = () => {
    const onClick = action("clicked");
    const buttonColor = select(
        "Color",
        ["default", "primary", "secondary"],
        "default"
    );

    return (
        <Button onClick={onClick} variant="fab-contained" color={buttonColor}>
            <Arrow direction="right" /> {text("Text", "Hello")}
        </Button>
    );
};
