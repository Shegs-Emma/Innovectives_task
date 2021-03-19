import React, { useState } from 'react';
import classes from './Plan.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const Plan = ({ show }) => {
    const [ aggressive, setAggressive ] = useState(true);
    const [ stretching, setStretching ] = useState(false);
    const [ focused, setFocused ] = useState(false);
    const [ casual, setCasual ] = useState(false);
    const [ mild, setMild ] = useState(false);
    const [ gentle, setGentle ] = useState(false);

    const toggleSelected = (plan) => {
        if (plan === 'aggr') {
            setAggressive(true);
            setStretching(false);
            setFocused(false);
            setCasual(false);
            setMild(false);
            setGentle(false);
        }

        if (plan === 'stre') {
            setAggressive(false);
            setStretching(true);
            setFocused(false);
            setCasual(false);
            setMild(false);
            setGentle(false);
        }

        if (plan === 'focus') {
            setAggressive(false);
            setStretching(false);
            setFocused(true);
            setCasual(false);
            setMild(false);
            setGentle(false);
        }

        if (plan === 'casual') {
            setAggressive(false);
            setStretching(false);
            setFocused(false);
            setCasual(true);
            setMild(false);
            setGentle(false);
        }

        if (plan === 'mild') {
            setAggressive(false);
            setStretching(false);
            setFocused(false);
            setCasual(false);
            setMild(true);
            setGentle(false);
        }

        if (plan === 'gentle') {
            setAggressive(false);
            setStretching(false);
            setFocused(false);
            setCasual(false);
            setMild(false);
            setGentle(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleRedirect = (e) => {
        show(false);
    }

    return (
        <div className={classes.Summary}>
            <div className={classes.Top}>
                <div className={classes.Back}>
                    <FontAwesomeIcon icon={faArrowLeft} color='#AF0059' onClick={handleRedirect} />
                    <span onClick={handleRedirect}>Back</span>
                </div>
                <div className={classes.Steps}>
                    <div><FontAwesomeIcon icon={faCheck} /></div>
                    <hr/>
                    <div>2</div>
                    <hr />
                    <div>3</div>
                    <hr />
                    <div>4</div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className={classes.Bottom}>
                <div>
                    <div className={classes.PlanText}>
                        <p>Choose Your Plan</p>
                    </div>

                    <div className={classes.Calendar}>
                        <div className={classes.Date1}>
                            <div className={classes.Roof}></div>
                            <div className={classes.Body}></div>
                            <span className={aggressive ? classes.Inner1 : classes.Inner2} onClick={() => toggleSelected('aggr')}>
                                <span>Aggressive</span>
                                <span>1</span>
                                <span>month</span>
                            </span>
                        </div>

                        <div className={classes.Date2}>
                            <div className={classes.Roof1}></div>
                            <div className={classes.Body}></div>
                            <span className={stretching ? classes.Inner1 : classes.Inner2} onClick={() => toggleSelected('stre')}>
                                <span>Stretching</span>
                                <span>2</span>
                                <span>months</span>
                            </span>
                        </div>

                        <div className={classes.Date3}>
                            <div className={classes.Roof2}></div>
                            <div className={classes.Body}></div>
                            <span className={focused ? classes.Inner1 : classes.Inner2} onClick={() => toggleSelected('focus')}>
                                <span>Focused</span>
                                <span>3</span>
                                <span>months</span>
                            </span>
                        </div>

                        <div className={classes.Date4}>
                            <div className={classes.Roof3}></div>
                            <div className={classes.Body}></div>
                            <span className={casual ? classes.Inner1 : classes.Inner2} onClick={() => toggleSelected('casual')}>
                                <span>Casual</span>
                                <span>4</span>
                                <span>months</span>
                            </span>
                        </div>

                        <div className={classes.Date5}>
                            <div className={classes.Roof4}></div>
                            <div className={classes.Body}></div>
                            <span className={mild ? classes.Inner1 : classes.Inner2} onClick={() => toggleSelected('mild')}>
                                <span>Mild</span>
                                <span>5</span>
                                <span>months</span>
                            </span>
                        </div>

                        <div className={classes.Date6}>
                            <div className={classes.Roof5}></div>
                            <div className={classes.Body}></div>
                            <span className={gentle ? classes.Inner1 : classes.Inner2} onClick={() => toggleSelected('gentle')}>
                                <span>Gentle</span>
                                <span>6</span>
                                <span>months</span>
                            </span>
                        </div>
                    </div>

                </div>

                <div>
                    <div className={classes.BreakdownText}>
                        <p>Payment Breakdown</p>
                    </div>
                </div>

                <div className={classes.DetailsContainer}>
                    <div className={classes.DetailsDiv}>
                        <div>Shopping Credit</div>
                        <div>Down Payment</div>
                        <div>Monthly Installment</div>
                        <div>Tenure</div>
                    </div>
                    <div className={classes.DetailsPrices}>
                        <div>&#8358; 45,000</div>
                        <div>&#8358; 21,000</div>
                        <div>&#8358; 25,000</div>
                        <div>1 month</div>
                    </div>
                    <div className={classes.Update}>
                        <div className={classes.Custom}>
                            <span>Customize</span>
                            <span>Down Payment</span>
                        </div>
                        <div className={classes.Naira}>
                            <div className={classes.NairaSign}>&#8358;</div>
                            <input type='text' />
                        </div>
                        <div className={classes.MyButton}>
                            <button className={classes.Button}>Update Breakdown</button>
                        </div>
                    </div>
                </div>
                <Button />
            </form>
        </div>
    )
}

export default Plan;
