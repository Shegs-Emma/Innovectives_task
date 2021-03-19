import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.clicked} className={classes.Button}>Continue</button>
        </div>
    )
}

export default Button;
