import React from 'react';
import classes from './Summary.module.css';
import img from '../../assets/undraw_Designer_by46.svg';
import img2 from '../../assets/undraw_working_remotely_jh40.svg';
import img3 from '../../assets/undraw_quite_town_mg2q.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Summary = () => {
    return (
        <div className={classes.Summary}>
            <div className={classes.Top}>
                <div className={classes.Steps}>
                    <div>1</div>
                    <hr/>
                    <div>2</div>
                    <hr />
                    <div>3</div>
                    <hr />
                    <div>4</div>
                </div>
                <div className={classes.What}>
                    <p>What Do You Do?</p>
                </div>
                <div className={classes.Svg}>
                    <div>
                        <img src={img} alt="svg" />
                        <p>Paid Employment</p>
                    </div>
                    <div>
                        <img src={img2} alt="svg" />
                        <p>Self Employed / Freelance</p>
                    </div>
                    <div>
                        <img src={img3} alt="svg" className={classes.Building} />
                        <p>Corporate Organization</p>
                    </div>
                </div>
            </div>
            <div className={classes.Bottom}>
                <div className={classes.Pay}>
                    <p>How much do you get paid monthly?</p>
                    <div className={classes.Naira}>
                        <div className={classes.NairaSign}>&#8358;</div>
                        <input type='text' />
                    </div>
                </div>
                <div className={classes.Date}>
                    <p>When is your next salary date?</p>
                    <div className={classes.DatePicker}>
                        <FontAwesomeIcon icon={faCalendarAlt} color='#720056' size="0.5x" />
                        <span>Select pay date</span>
                        <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                </div>
                <div className={classes.Loan}>
                    <p>Do you have any existing loan(s)?</p>
                    <div className={classes.LoanPicker}>
                        <label className={classes.Radio}>
                            <input type='radio' name='loan' id='yes' value='yes' />
                            <span> Yes </span>
                        </label>
                        <label className={classes.Radio}>
                            <input type='radio' name='loan' id='no' value='no' />
                            <span> No </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;