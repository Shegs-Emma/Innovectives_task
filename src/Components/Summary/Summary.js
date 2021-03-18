import React, { useState } from 'react';
import classes from './Summary.module.css';
import img from '../../assets/undraw_Designer_by46.svg';
import img2 from '../../assets/undraw_working_remotely_jh40.svg';
import img3 from '../../assets/undraw_quite_town_mg2q.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';


const Summary = () => {
    const [ selectedDate, setSelectedDate ] = useState(new Date());
    const [ viewDate, setViewDate ] = useState(false);
    const [ paid, setPaid ] = useState(true);
    const [ home, setHome ] = useState(false);
    const [ corporate, setCorporate ] = useState(false);

    const toggleDate = () => {
        let date = viewDate ? false : true;

        setViewDate(date);
    }

    const toggleSelected = (title) => {

        if(title === 'paid'){
            setPaid(true)
            setHome(false)
            setCorporate(false)
        } 

        if(title === 'home'){
            setPaid(false)
            setCorporate(false)
            setHome(true)
        } 

        if(title === 'corp'){
            setHome(false)
            setPaid(false)
            setCorporate(true)
        }
    }

    let datePicker = viewDate ? <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} className={classes.DateP} /> : null;

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
            </div>
            <form className={classes.Bottom}>
                <div className={classes.What}>
                    <p>What Do You Do?</p>
                </div>
                <div className={classes.Svg}>
                    <div onClick={() => toggleSelected('paid')}>
                        <img src={img} alt="svg" />
                        <p className={paid ? classes.Selected : ''}>Paid Employment</p>
                    </div>
                    <div onClick={() => toggleSelected('home')}>
                        <img src={img2} alt="svg" />
                        <p className={home ? classes.Selected : ''}>Self Employed / Freelance</p>
                    </div>
                    <div onClick={() => toggleSelected('corp')}>
                        <img src={img3} alt="svg" className={classes.Building} />
                        <p className={corporate ? classes.Selected : ''}>Corporate Organization</p>
                    </div>
                </div>
                <div className={classes.Pay}>
                    <p>How much do you get paid monthly?</p>
                    <div className={classes.Naira}>
                        <div className={classes.NairaSign}>&#8358;</div>
                        <input type='text' name="amount" />
                    </div>
                </div>
                <div className={classes.Date}>
                    <p>When is your next salary date?</p>
                    <div className={classes.DatePicker}>
                        <FontAwesomeIcon icon={faCalendarAlt} color='#720056' size="0.5x" onClick={toggleDate} />
                        <span>{viewDate ? datePicker : 'Select pay date'}</span>
                        <FontAwesomeIcon icon={faChevronDown} size="xs"  onClick={toggleDate} />
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
                <Button />
            </form>
        </div>
    )
}

export default Summary;