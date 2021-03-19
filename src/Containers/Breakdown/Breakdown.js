import React from 'react';
import classes from './Breakdown.module.css';
import Plan from '../../Components/Plan/Plan';

const Breakdown = ({ show }) => {
    const handleShowing = (bool) => {
        show(bool);
    }

    return (
        <div className={classes.Payment}>
            <Plan show={handleShowing} />
        </div>
    )
}

export default Breakdown;