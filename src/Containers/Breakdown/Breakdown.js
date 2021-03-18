import React from 'react';
import classes from './Breakdown.module.css';
import Plan from '../../Components/Plan/Plan';
import Button from '../../Components/Button/Button';

const Breakdown = () => {
    return (
        <div className={classes.Payment}>
            <Plan />
            <Button />
        </div>
    )
}

export default Breakdown;