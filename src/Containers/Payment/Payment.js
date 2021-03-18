import React from 'react';
import classes from './Payment.module.css';
import Summary from '../../Components/Summary/Summary';

const Payment = () => {
    return (
        <div className={classes.Payment}>
            <Summary />
        </div>
    )
}

export default Payment;