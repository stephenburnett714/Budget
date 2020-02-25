import React from 'react';
import  { Link }  from 'react-router-dom'



function Nav() {
    
    return (
        <div className="Nav">

                <div className="budget-logo-div">
                    <Link to='/'>
                        <div className="BUDGET-LOGO"></div>
                    </Link>
                </div>

                <div className="Navlinks">

                    <div className="Business-Rentals-Car">
                        <h4 className="dummy-nav-upper-links">Business Rentals</h4>
                        <h4 className="dummy-nav-upper-links">Car Sales</h4>
                        <h4 className="dummy-nav-upper-links">Customer Care</h4>
                        <h4 className="dummy-nav-upper-links">Register</h4>
                        <Link to='/login'>Sign In</Link>
                    </div>
                    
                    <div className="Reservations-Deals-L">
                        <Link to='/reservations'>Reservations</Link>
                        <h3 className="dummy-nav-links">Deals</h3>
                        <h3 className="dummy-nav-links">Locations</h3>
                        <h3 className="dummy-nav-links">Services</h3>
                        <h3 className="dummy-nav-links">Fastbreak</h3>
                    </div>

                </div>
            
        </div>
    )
}
export default Nav
