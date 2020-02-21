import React from 'react';
import { Link } from 'react-router-dom'

function ResultsNav() {
    return (
        <div>
            <div className="Nav">
                <Link to='/'>
                    <div className="homebutton"></div>
                </Link>

                <div className="resultsnav">
                    <Link to='/customercare'>Customer Care</Link>
                    <Link to='/login'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default ResultsNav