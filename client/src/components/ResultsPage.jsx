import React from 'react';
import {Link} from 'react-router-dom'
import ResultsNav from './ResultsNav'


   function ResultsPage(props) {
   
    const carType= props.vehicleType
    const dropOffDate= (props.dropOffDate).toString()
    const pickUpCityState= props.pickUpCityState
    const pickUpLocation =props.pickUpLocation
    const pickUpDate = props.pickUpDate.toString()
    const basePrice = 60.00
    const protectionsAndCoverage = 0.00
    const taxes = basePrice * .1
    const subtotal = basePrice + protectionsAndCoverage + taxes

    
        function addOns(){
            console.log('button was clicked')
        let add = protectionsAndCoverage + 30
        return console.log(add)
        }
 
    
    return (
            <div>
                <ResultsNav/>

                <div className="togglebar">
                    .
                </div>

                <div className="rate-calc">

                    <div className="reservation-info">

                        <div className="pick-up">
                            <h3>Pick Up</h3>
                            <h4>{pickUpLocation}</h4>
                            <h4>{pickUpCityState}</h4>
                            <h4>{pickUpDate}</h4>
                        </div>

                        <div className="drop-off">
                            <h3>Return</h3>
                            <h4>{pickUpLocation}</h4>
                            <h4>{pickUpCityState}</h4>
                            <h4>{dropOffDate}</h4>
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
                            <h5>${basePrice}</h5>
                            <h5>${protectionsAndCoverage}</h5>
                            <h5>$0.00</h5>
                            <h5>${taxes}</h5>
                        </div>

                    </div>

                </div>
                <div className="checkout">
                            <h5>Subtotal:</h5>

                            <Link to='/reservations'><button className="checkout-button">Checkout</button></Link>
                        </div>
                <div className="reservation-car-info">
                <div className="economy-car-picture"></div>
                    <h2>{carType}</h2>
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
                        <button className="button" onClick={addOns}>$30.99/Day</button>
                    </div>
                </div>

                <div className="options-2">
                    <h3>Cover Myself</h3>
                    <h4>PAE protects you and your passenger in case of an accident or worse, while also providing up to $1,800 in coverage for your belongings during your trip.</h4>

                    <div className="addonbutton-2">
                        <button className="button">$30.99/Day</button>
                    </div>
                </div>

            </div>


    )
}

export default ResultsPage