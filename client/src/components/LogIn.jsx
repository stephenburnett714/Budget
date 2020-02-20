import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function LogIn() {

    return(
        <div>
            <Nav />
                <div className="landing-div">

                    <div className="center-orange-divs">
                        <div className="small-orange-rectangle">
                            <h2>GO GREENER!</h2>
                        </div>

                        <div className="big-orange-rectangle">
                            <h1>Save More On Eco-Friendly Vehicles</h1>
                        </div>
                    </div>

                    <div className="blue-div-two">
                            <button className="login-buttons">
                                <Link to="/users">
                                        I have a reservation
                                </Link>
                            </button>

                            <button className="login-buttons">
                                <Link to="/" className="car-select-link">
                                        Make a reservation
                                </Link>
                            </button>
                    </div>

                </div>
        </div>
    )
}

export default LogIn