import React from 'react';
import classes from './Order.module.css';
import { FaArrowLeft } from 'react-icons/fa';

const Order = () => {
    return (
        <div className={classes.Order}>
            <div className={classes.LogoWing}>
                <div className={classes.Back}>
                    <FaArrowLeft /> <span>Back to Store</span>
                </div>
                <div className={classes.QartLogo}>
                    <img src="https://www.payqart.com/assets/images/payqart-wide-1-390x121.jpg" alt="logo" />
                </div>
                <div className={classes.Direct}>
                    <ul>
                        <li>Get pre-approved instantly.</li>
                        <li>Spread payment for up to six months.</li>
                        <li>Provide some basic information to get started.</li>
                    </ul>
                </div>
            </div>
            <div className={classes.OrderWing}>
                <div className={classes.Head}>
                    <p>ORDER SUMMARY</p>
                </div>
                <div className={classes.ProductCont}>
                    <div className={classes.OrderProduct}>
                        <div className={classes.Product}>
                            <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/03/330166/1.jpg?3556" alt="infinix" className={classes.TopImage} />
                            <div className={classes.Productdetails}>
                                <p className={classes.Name}>Meeysoo P45 Pro </p>
                                <p className={classes.Price}>&#8358; 42,900</p>
                                <p className={classes.Qty}>Qty: 1</p>
                            </div>
                        </div>
                        <div className={classes.Product}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9kHXV3pecgM9lnTBhzh5YZ3Gjocf0l2zpg&usqp=CAU" alt="infinix" />
                            <div className={classes.Productdetails}>
                                <p className={classes.Name}>Men's Long Sleeve Shirt</p>
                                <p className={classes.Price}>&#8358; 6,800</p>
                                <p className={classes.Qty}>Qty: 2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.PriceDiv}>
                    <p>Total Cart Value:</p>
                    <p>&#8358; 52,100</p>
                </div>
            </div>
        </div>
    )
}

export default Order;