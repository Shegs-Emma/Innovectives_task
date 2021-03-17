import React from 'react';
import classes from './Payment.module.css';
import Summary from '../../Components/Summary/Summary';
import Button from '../../Components/Button/Button';

const Payment = () => {
    return (
        <div className={classes.Payment}>
            <Summary />
            <Button />
        </div>
    )
}

export default Payment;