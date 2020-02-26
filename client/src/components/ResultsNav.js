import React from 'react';
import { Link } from 'react-router-dom'

function ResultsNav() {
    return (

        <div className="Nav">
            <Link to='/'>
                <div className="homebutton"></div>
            </Link>

                <div className="resultsnav">
                    <h3 className="dummy-results-nav-links">Customer Care</h3>
                    <div>
                        <Link to='/login'>Sign In</Link>
                        <div className="sign-in-logo"></div>
                    </div>
               </div>
        </div>

    )
}

export default ResultsNav