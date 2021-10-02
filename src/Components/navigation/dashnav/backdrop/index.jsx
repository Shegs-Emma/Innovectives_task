import React from 'react';
import BackdropCont from "./backdrop.styles.js";

const Backdrop = ({ show, clicked }) => {
    return (
        show ? (
            <BackdropCont onClick={clicked} />
        ) : null
    )
};

export default Backdrop;