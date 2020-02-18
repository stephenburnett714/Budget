import React from 'react'


function landingPage() {


    return (
        <div className="landing-div">
            

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
                <form action="">
                    
                    <input type="text" className="pick-up-searchbar" placeholder="Enter Your Pickup Location"/>
                    
                    <div className="location-checkbox-div">
                        <input type="checkbox" className="different-location-checkbox"/> 
                        <p className="location-checkbox">Returning to a Different Location?</p>
                    </div>

                    <div className="landing-date-time">
                        <input type="text" className="select-dates" placeholder="Select My Dates" />
                        <input type="text" className="select-time" placeholder="Pickup Time" />
                        <input type="text" className="select-time" placeholder="Dropoff Time" />
                    </div>

                    <div className="car-type-div">
                        <input type="text" className="select-car" placeholder="Select Vehicle Type" />
                        <input type="checkbox" />
                        <p className="location-checkbox">Under 25?</p>
                    </div>

                    <div className="car-select-button-div">
                        <button className="car-select-button"> <p className="car-select-button-text">Select my car</p> </button>
                    </div>

                </form>
            </div>

            
        </div>
    )
}

export default landingPage