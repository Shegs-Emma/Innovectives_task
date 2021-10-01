import React from "react";
import { ButtonContain } from "./button.styles";

const Button = ({ children, clicked, dev, pur, sub, bac }) => {
    return (
        <ButtonContain
            dev={dev}
            pur={pur}
            sub={sub}
            bac={bac}
            onClick={clicked}
        >
            {children}
        </ButtonContain>
    )
};

export default Button;