import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { useState } from 'react'
import Reservations from './Reservations'

function Users(props) { 
    console.log(props)

    return (
        <div>
            <Nav />
                <div className="landing-div">

                    <div className="center-orange-divs">
                        <div className="small-orange-rectangle">
                            <h2>GO GREENER!</h2>
                        </div>

                        <div className="big-orange-rectangle">
                            <h1>Log in to see your reservations</h1>
                        </div>
                    </div>

                    <div className="blue-div-two">

                        <div className="users-input-div">
                            <h3 className="users-input-fields"> First Name </h3>
                            <input type="text" className="user-text-fields" onChange={props.setUserName} />

                            <h3 className="users-input-fields"> Last Name </h3>
                            <input type="text" className="user-text-fields"/>

                            <h3 className="users-input-fields"> Email </h3>
                            <input type="text" className="user-text-fields"/>
                        </div>

                        <button className="see-reservations-button">
                                <Link to="/reservations" className="car-select-link" >
                                    See reservations
                                </Link>
                        </button>

                    </div>

                </div>
        </div>
    )
}

export default Users