import React from 'react';
import classes from './Payment.module.css';
import Summary from '../../Components/Summary/Summary';

const Payment = ({ show }) => {

    const handleShowing = (bool) => {
        show(bool)
    }


    return (
        <div className={classes.Payment}>
            <Summary show={handleShowing} />
        </div>
    )
}

export default Payment;