import React from 'react';
import {Link} from 'react-router-dom'
import ResultsNav from './ResultsNav'


   function ResultsPage(props) {
   
    const carType = props.vehicleType
    const dropOffDate = (props.dropOffDate).toString()
    const pickUpCityState = props.pickUpCityState
    const pickUpLocation = props.pickUpLocation
    const pickUpDate = props.pickUpDate.toString()
    
    let numPickUpDate = parseInt(pickUpDate.substr(8, 2))
    let numDropOffDate = parseInt(dropOffDate.substr(8, 2))
    let rentalDays = numDropOffDate - numPickUpDate
    let basePrice = rentalDays * 60.00
    let taxes = (basePrice * 0.075).toFixed(2)
    let floatTaxes = parseFloat(taxes)
    let subTotal = basePrice + floatTaxes

    console.log(carType)

    const addOns = (e) => {
        e.preventDefault()
        let newPrice = basePrice + 30.99
        let newTaxes = ((newPrice + 30.99) * 0.075).toFixed(2)
        let floatNewTaxes = parseFloat(newTaxes)
        let newSubTotal = newPrice + floatNewTaxes
        document.querySelector('.taxes-results-page').innerHTML = `$ ${newTaxes}`
        document.querySelector('.protection-coverages').innerHTML = `$ 30.99`
        document.querySelector('.results-subtotal').innerHTML = `$ ${newSubTotal}`
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
                            <h4>Base Rate:</h4>
                            <h4>Protections and Coverages:</h4>
                            <h4>Equipment and Services:</h4>
                            <h4>Fees and Taxes:</h4>
                        </div>

                        <div className="prices">
                            <h4 className="baseprice-results-page">$ {basePrice}</h4>
                            <h4 className="protection-coverages">$ 0</h4>
                            <h4>$0.00</h4>
                            <h4 className="taxes-results-page">$ {taxes}</h4>
                        </div>

                    </div>

                </div>
                <div className="checkout">
                            <h2>Subtotal: <span className="results-subtotal">$ {subTotal}</span> </h2>

                            <Link to='/reservations'><button className="checkout-button">Checkout</button></Link>
                        </div>

                <div className="reservation-car-info">
                    <div style={{display: "flex"}}>
                        <div className="economy-car-picture">
                        </div>

                        <div>
                            <h1>{carType}</h1>
                            <h3 style={{color: "black"}}> Honda Civic or similar</h3>
                            <h4 style={{color: "#EA9034", textDecoration: "underline"}}>View more vehicle info</h4>
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