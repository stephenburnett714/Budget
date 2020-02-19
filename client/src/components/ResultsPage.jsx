import React from 'react';

function ResultsPage(){
    return(
        <div>
            <div className="togglebar">
                 .
            </div>
            <div className="rate-calc">
                <div className="reservation-info">
                    <div className="pick-up">
                    <h3>Pick Up</h3>
                    <h4>New York City, NY</h4>
                    <h4>FRI, Feb 22, 2020 3:00PM</h4>
                    </div>
                    <div className="drop-off">
                        <h3>Return</h3>
                        <h4>New York City, NY</h4>
                        <h4>MON, Feb 25, 2020 3:00PM</h4>
                    </div>
                </div>
                <div className="calculator">
                <div className="titles">
                    <h5>Base Rate</h5>
                    <h5>Protections and Coverages</h5>
                    <h5>Equipment and Services</h5>
                    <h5>Fees and Taxes</h5>
                </div>
                <div className="prices">
                    prices go here
                </div>
                </div>
            </div>
            <div className="extras">
            <h1>Recommended Extras</h1>
            </div>
            <div className="protections">
            <h2>Protections and Coverages </h2>
            </div>
            <div className="options">
                <h3>Cover The Car</h3>
                <h4>With LDW, avoid paying for damage to our vehicle with no addition out of pocket expense and no increate to your personal policy due to an incident.</h4>
                <div classname="addonbutton">
                <button class="button">$30.99/Day</button>
                </div>
            </div>
            <div className="options-2">
                <h3>Cover Myself</h3>
                <h4>PAE protects you and your passenger in case of an accident or worse, while also providing up to $1,800 in coverage for your belongings during your trip.</h4>
                <div classname="addonbutton">
                <button class="button">$30.99/Day</button>
                </div>
            </div>
            
            
            </div>
    )
}
export default ResultsPage