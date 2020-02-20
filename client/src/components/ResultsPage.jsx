import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom'


   function ResultsPage(props) {
   
    //    const addProtectionsandCoverClick = (e) =>{
    //        e.preventDefault()
    //        let priceJump = (e.target.value)

    //        console.log('this button works')
    //    }
    //    let subtotal = 0.00
    //    console.log(subtotal)
    console.log(props)
    
        return (
            <div>
                <div className="togglebar">
                    .
            </div>
                <div className="rate-calc">
                    <div className="reservation-info">
                        <div className="pick-up">
                            <h3>Pick Up</h3>
                            <h4>New York City, NY</h4>
                            <h4>FRI, Feb 22, 2020 3:00PM</h4>
                        </div>
                        <div className="drop-off">
                            <h3>Return</h3>
                            <h4>New York City, NY</h4>
                            <h4>MON, Feb 25, 2020 3:00PM</h4>
                        </div>
                    </div>
                    <div className="calculator">
                        <div className="titles">
                            <h5>Base Rate:</h5>
                            <h5>Protections and Coverages:</h5>
                            <h5>Equipment and Services:</h5>
                            <h5>Fees and Taxes:</h5>
                        </div>
                        <div className="prices">
                            <h5>$20.00</h5>
                            <h5>$0.00</h5>
                            <h5>$0.00</h5>
                            <h5>$0.00</h5>
                        </div>
                        <div className="checkout">
                            <h5>Subtotal:</h5>
                            {/* <h5>${subtotal}</h5> */}
                            <Link to='/reservations'><button className="checkout-button">Checkout</button></Link>
                        </div>
                    </div>
                </div>
                <div className="extras">
                    <h1>Recommended Extras</h1>
                </div>
                <div className="protections">
                    <h2>Protections and Coverages </h2>
                </div>
                <div className="options">
                    <h3>Cover The Car</h3>
                    <h4>With LDW, avoid paying for damage to our vehicle with no addition out of pocket expense and no increate to your personal policy due to an incident.</h4>
                    <div className="addonbutton">
                        <button className="button" >$30.99/Day</button>
                    </div>
                </div>
                <div className="options-2">
                    <h3>Cover Myself</h3>
                    <h4>PAE protects you and your passenger in case of an accident or worse, while also providing up to $1,800 in coverage for your belongings during your trip.</h4>
                    <div classname="addonbutton-2">
                        <button className="button">$30.99/Day</button>
                    </div>
                </div>

            </div>


        )
    }

export default ResultsPage