import React from 'react'
import Nav from './Nav'


function Reservations(props) {

    return(
        <div>
            <Nav />
                <div className="landing-div">

                    <div className="reservations-header-div">
                        <h2 className="reservations-header-text">Hello {props.userName},</h2>
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
        </div>
    )
}

export default Reservations