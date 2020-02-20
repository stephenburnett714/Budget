import React, { useState } from 'react'
import './App.css'
import LandingPage from './components/landingPage'
import { Route, withRouter, Link } from 'react-router-dom'
import SelectACar from './components/routes/SelectACar'
import ResultsPage from './components/ResultsPage'
import LogIn from './components/LogIn'
import Users from './components/Users'
import Reservations from './components/Reservations'
// import ResultsNav from './'



function App() {
  const [pickUpLocation, setPickUpLocation] = useState('')
  const [pickUpCityState, setPickUpCityState] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [pickUpDate, setPickUpDate] = useState('')
  const [dropOffDate, setDropOffDate] = useState('')
  const [carSelected, setCarSelected] = useState([])

  const handlePickUpLocationClick = (e) => {
    e.preventDefault()
    let targetValue = (e.target.value)

    if (targetValue === 'JFK') {
      setPickUpLocation('John F. Kennedy International Airport')
      setPickUpCityState('Queens, NY 11430')
    } else if (targetValue === 'NWK') {
      setPickUpLocation('Newark Liberty International Airport')
      setPickUpCityState('Newark, NJ 07114')
    } else if (targetValue === 'LGA') {
      setPickUpLocation('La Guardia Airport')
      setPickUpCityState('Queens, NY 11371')
    } else {
      console.log('Not what we expected?')
    }

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

  const handleSelectedCar = (e) => {
    e.preventDefault()
    let toInt = (parseInt(e.target.value) + 1)
    console.log(toInt)

    //setCarSelected() 
  }

console.log(carSelected)
  return (

    <React.Fragment>
      <div className="App">

        <Route exact path="/" 
            render={() => (<LandingPage  setLocation={handlePickUpLocationClick} setVehicleType={handleVehicleTypeClick} setCalendarDates={calendarDates} />)} />

        <Route exact path="/login"
            render={() => (<LogIn />)} />

        <Route exact path="/users"
            render={() => (<Users />)} />

        <Route exact path="/reservations"
            render={() => (<Reservations />)} />


         <Route exact path="/carselect">
            <SelectACar vehicleType={vehicleType}/>
         </Route>


        <Route exact path="/results">
          <ResultsPage vehicleType={vehicleType} pickUpLocation={pickUpLocation} pickUpCityState={pickUpCityState} pickUpDate={pickUpDate} dropOffDate={dropOffDate} carSelected={carSelected} />
        </Route>

      </div>
    </React.Fragment>

  )
}


export default withRouter(App)

