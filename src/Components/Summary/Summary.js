import React, { useState, useEffect } from 'react';
import classes from './Summary.module.css';
import img from '../../assets/undraw_Designer_by46.svg';
import img2 from '../../assets/undraw_working_remotely_jh40.svg';
import img3 from '../../assets/undraw_quite_town_mg2q.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';
import axios from 'axios';


const Summary = ({ show }) => {
    const [ selectedDate, setSelectedDate ] = useState(new Date());
    const [ viewDate, setViewDate ] = useState(false);
    const [ paid, setPaid ] = useState(true);
    const [ home, setHome ] = useState(false);
    const [ corporate, setCorporate ] = useState(false);
    const [ job, setJob ] = useState('');
    const [ amount, setAmount ] = useState();
    const [ loan, setLoan ] = useState('');
    const [ details, setDetails ] = useState();

    useEffect(() => {
        const getResponse = () => {
            // axios.post('http://localhost:3001/api/', details)
            axios.post('https://payqart-task.herokuapp.com/api/', details)
            .then(res => {
                console.log(res)
                show(true);
            })
            .catch(err => {
                console.log(err)
            })
        }

        if (details) {
            getResponse();
        }
    }, [details, show])


    const toggleDate = () => {
        let date = viewDate ? false : true;

        setViewDate(date);
    }

    const toggleSelected = (title) => {

        if(title === 'paid'){
            
            setPaid(true);
            setHome(false);
            setCorporate(false);

            setJob('Paid Employment');
            
        } 

        if(title === 'home'){
            setPaid(false)
            setCorporate(false)
            setHome(true);

            setJob('Self Employed / Freelance');
        } 

        if(title === 'corp'){
            setHome(false)
            setPaid(false)
            setCorporate(true)

            setJob('Corporate Organization');
        }
    }

    const handleChange = (e) => {
        const yourPay = e.target.value;

        setAmount(yourPay);
    }

    const handleRadio = (e) => {
        const checked = e.target.value;

        setLoan(checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const payDetails = {
            job,
            amount,
            selectedDate,
            loan
        }

        setDetails(payDetails);
        
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
            <form onSubmit={handleSubmit} className={classes.Bottom}>
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
                        <input type='text' name="amount" onChange={handleChange} />
                    </div>
                </div>
                <div className={classes.Date}>
                    <p>When is your next salary date?</p>
                    <div className={classes.DatePicker}>
                        <FontAwesomeIcon icon={faCalendarAlt} color='#720056' size="1x" onClick={toggleDate} />
                        <span>{viewDate ? datePicker : 'Select pay date'}</span>
                        <FontAwesomeIcon icon={faChevronDown} size="xs"  onClick={toggleDate} />
                    </div>
                </div>
                <div className={classes.Loan}>
                    <p>Do you have any existing loan(s)?</p>
                    <div className={classes.LoanPicker}>
                        <label className={classes.Radio}>
                            <input type='radio' name='loan' id='yes' value='yes' onChange={handleRadio} />
                            <span> Yes </span>
                        </label>
                        <label className={classes.Radio}>
                            <input type='radio' name='loan' id='no' value='no' onChange={handleRadio} />
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