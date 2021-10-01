import React from "react";
import { ButtonContain } from "./button.styles";

const Button = ({ children }) => {
    return (
        <ButtonContain>
            {children}
        </ButtonContain>
    )
};

export default Button;