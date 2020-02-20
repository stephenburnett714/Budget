import React, { useState } from 'react'
import './App.css'
import LandingPage from './components/landingPage'
import { Route, withRouter } from 'react-router-dom'
import SelectACar from './components/routes/SelectACar'
import Nav from './components/Nav';
import ResultsPage from './components/ResultsPage'
import ResultsNav from './components/ResultsNav'


function App() {
  const [pickUpLocation, setPickUpLocation] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [pickUpDate, setPickUpDate] = useState('')
  const [dropOffDate, setDropOffDate] = useState('')

  console.log(vehicleType)
  console.log(pickUpDate)
  console.log(dropOffDate)

  const handlePickUpLocationClick = (e) => {
    e.preventDefault()
    let location = (e.target.value)
    setPickUpLocation(location)
  }

  const handleVehicleTypeClick = (e) => {
    e.preventDefault()
    let vehicleType = (e.target.value)
    setVehicleType(vehicleType)
  }

  const calendarDates = date => {
    setPickUpDate(date[0])
    setDropOffDate(date[1])
  }

  return (
    <React.Fragment>
      <div className="App">
        <Route exact path="/">
          <ResultsNav/>
          <ResultsPage/>
          {/* <Nav/> */}
          {/* <LandingPage setLocation={handlePickUpLocationClick} setLocation={handlePickUpLocationClick} setVehicleType={handleVehicleTypeClick} setCalendarDates={calendarDates} /> */}
        </Route>
            {/* render={ (routeProps) => (<LandingPage {...routeProps} setLocation={handlePickUpLocationClick} setVehicleType={handleVehicleTypeClick} setCalendarDates={calendarDates} />)} /> */}
        <Route exact path="/carselect" component={SelectACar} />
      </div>
    </React.Fragment>
  );
}


export default withRouter(App)

