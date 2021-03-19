import React, { useState } from 'react';
import Payment from '../Payment/Payment';
import Breakdown from '../Breakdown/Breakdown';

const Wrapper = () => {
    const [ showPayment, setShowPayment ] = useState(false);

    const showComp = (foo) => {

        setShowPayment(foo);
    }

    let showItem = showPayment ? <Breakdown show={showComp} /> : <Payment show={showComp} />;

    return (
        <React.Fragment>
            {showItem}
        </React.Fragment>
    )
}

export default Wrapper;