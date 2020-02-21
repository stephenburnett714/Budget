import React from 'react'
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'
import Nav from './Nav'


function landingPage(props) { 
   
    const showCalendar = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <Nav />
            <div className="landing-page-div">
                

                <div className="center-orange-divs">
                    <div className="small-orange-rectangle">
                        <h2>GO GREENER!</h2>
                    </div>

                    <div className="big-orange-rectangle">
                        <h1>Save More On Eco-Friendly Vehicles</h1>
                    </div>
                </div>
                
                    <div className="FAVPNG_leaves_rkB7hhB5"></div>

                <div className="blue-div">
                    <form >

                        <div className="location-dropdown">
                                <button className="drop-location-button" onClick={showCalendar}> Enter Your Pickup Location </button>
                                    <div className="location-dropdown-content">
                                        <button onClick={props.setLocation} value="JFK" className="car-type-buttons">JFK Airport</button>
                                        <button onClick={props.setLocation} value="NWK" className="car-type-buttons">Newark Liberty Airport</button>
                                        <button onClick={props.setLocation} value="LGA" className="car-type-buttons">La Guardia Airport</button>
                                    </div>
                            </div>
                        
                        <div className="location-checkbox-div">
                            <input type="checkbox" /> 
                            <p className="location-checkbox">Returning to a Different Location?</p>
                        </div>

                        <div className="landing-page-date-time-div">

                            <div className="calendar-div">
                                <button className="calendar-dropdown" onClick={showCalendar}> Select My dates </button>
                                        <Calendar selectRange className="calendar-dropdown-content"
                                            onChange={props.setCalendarDates}
                                        />
                            </div>

                            <input type="text" className="select-time" placeholder="Pickup Time" />
                            <input type="text" className="select-time" placeholder="Dropoff Time" />
                        </div>

                        <div className="car-type-div">
                            
                            <div className="vehicle-dropdown">
                                <button className="drop-vehicle-button" onClick={showCalendar}> Select Vehicle Type </button>
                                    <div className="vehicle-dropdown-content">
                                        <button onClick={props.setVehicleType} value="Economy" className="car-type-buttons">Economy</button>
                                        <button onClick={props.setVehicleType} value="Compact" className="car-type-buttons">Compact</button>
                                    </div>
                            </div>

                            <input type="checkbox" />
                            <p className="location-checkbox">Under 25?</p>
                        </div>

                        <div className="car-select-button-div">

                        <button className="car-select-button">
                            <Link to='/carselect' className="car-select-link">
                                Select my car
                            </Link>
                        </button>

                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default landingPage

