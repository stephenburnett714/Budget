import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom'

function ResultsNav() {
    return (
        <div className="Nav">
            <Link to='/'>
                <div className="homebutton"></div>
            </Link>

            <div className="resultsnav">
                <Link to='/customercare'>Customer Care</Link>
                <Link to='/signin'>Sign In</Link>
            </div>
        </div>
    )
}

export default ResultsNav