import React from 'react'
import { Link } from 'react-router-dom'

function Reservations() {

    return(
        <div className="landing-div">

            <div className="reservations-header-div">
                <h2 className="reservations-header-text">Hello John,</h2>
                <h1 className="reservations-header-text">Scan this code to begin your pick-up process.</h1>
            </div>
            

            <div className="qr-code-div">
                <div className="qr-code-img"></div>
                <p className="reservations-header-text">How does <span className="footer-underline">this work?</span></p>
            </div>

            <footer className="footer-div">
            <p className="reservations-header-text">We've added new features to make your drop-off easier!</p>
            <p className="reservations-header-text">Check the materials in your car for <span className="footer-underline">more info.</span></p>
            </footer>

        </div>
    )
}

export default Reservations