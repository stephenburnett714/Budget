import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'



function Nav() {
    
    return (
        <div className="Nav">
            
                <Link to='/'>
                    <div className="BUDGET-LOGO"></div>
                </Link>

                <div className="Navlinks">

                    <div className="Business-Rentals-Car">
                        <Link to='/business'>Business Rentals</Link>
                        <Link to='/carsales'>Car Sales</Link>
                        <Link to='/customercare'>Customer Care</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Sign In</Link>
                    </div>
                    
                    <div className="Reservations-Deals-L">
                        <Link to='/reservations'>Reservations</Link>
                        <Link to='/deals'>Deals</Link>
                        <Link to='/locations'>Locations</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/fastbreak'>Fastbreak</Link>
                    </div>

                </div>
            
        </div>
    )
}
export default Nav
