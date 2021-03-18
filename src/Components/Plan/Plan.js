import React from 'react';
import classes from './Plan.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

const Plan = () => {
    return (
        <div className={classes.Summary}>
            <div className={classes.Top}>
                <div className={classes.Back}>
                    <FontAwesomeIcon icon={faArrowLeft} color='#AF0059' />
                    <span>Back</span>
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
            <div className={classes.Bottom}>
                <div>
                    <div className={classes.PlanText}>
                        <p>Choose Your Plan</p>
                    </div>

                    <div className={classes.Calendar}>
                        <div className={classes.Date1}>
                            <div className={classes.Roof}></div>
                            <div className={classes.Body}></div>
                            <span className={classes.Inner1}>
                                <span>Aggressive</span>
                                <span>1</span>
                                <span>month</span>
                            </span>
                        </div>

                        <div className={classes.Date2}>
                            <div className={classes.Roof1}></div>
                            <div className={classes.Body}></div>
                            <span className={classes.Inner2}>
                                <span>Stretching</span>
                                <span>2</span>
                                <span>months</span>
                            </span>
                        </div>

                        <div className={classes.Date3}>
                            <div className={classes.Roof2}></div>
                            <div className={classes.Body}></div>
                            <span className={classes.Inner2}>
                                <span>Focused</span>
                                <span>3</span>
                                <span>months</span>
                            </span>
                        </div>

                        <div className={classes.Date4}>
                            <div className={classes.Roof3}></div>
                            <div className={classes.Body}></div>
                            <span className={classes.Inner2}>
                                <span>Casual</span>
                                <span>4</span>
                                <span>months</span>
                            </span>
                        </div>

                        <div className={classes.Date5}>
                            <div className={classes.Roof4}></div>
                            <div className={classes.Body}></div>
                            <span className={classes.Inner2}>
                                <span>Mild</span>
                                <span>5</span>
                                <span>months</span>
                            </span>
                        </div>

                        <div className={classes.Date6}>
                            <div className={classes.Roof5}></div>
                            <div className={classes.Body}></div>
                            <span className={classes.Inner2}>
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
            </div>
        </div>
    )
}

export default Plan;
