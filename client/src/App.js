import React, { useState } from 'react'
import './App.css'
import LandingPage from './components/landingPage'
import { Route, withRouter, Link } from 'react-router-dom'
import SelectACar from './components/routes/SelectACar'
import ResultsPage from './components/ResultsPage'
import LogIn from './components/LogIn'
import Users from './components/Users'
import Reservations from './components/Reservations'



function App() {
  const [pickUpLocation, setPickUpLocation] = useState('')
  const [pickUpCityState, setPickUpCityState] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [pickUpDate, setPickUpDate] = useState('')
  const [dropOffDate, setDropOffDate] = useState('')
  const [carSelected, setCarSelected] = useState([])
  const [userName, setUserName] = useState('John')


  const handlePickUpLocationClick = (e) => {
    e.preventDefault()
    let targetValue = (e.target.value)

    if (targetValue === 'JFK') {
      document.querySelector('.drop-location-button').innerHTML = 'John F. Kennedy International Airport'
      setPickUpLocation('John F. Kennedy International Airport')
      setPickUpCityState('Queens, NY 11430')
    } else if (targetValue === 'NWK') {
      document.querySelector('.drop-location-button').innerHTML = 'Newark Liberty International Airport'
      setPickUpLocation('Newark Liberty International Airport')
      setPickUpCityState('Newark, NJ 07114')
    } else if (targetValue === 'LGA') {
      document.querySelector('.drop-location-button').innerHTML = 'La Guardia Airport'
      setPickUpLocation('La Guardia Airport')
      setPickUpCityState('Queens, NY 11371')
    } else {
      console.log('Not what we expected?')
    }
  }

  const handleVehicleTypeClick = (e) => {
    e.preventDefault()
    let vehicleType = (e.target.value)
    document.querySelector('.drop-vehicle-button').innerHTML = vehicleType
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
  }

  const setUserNameFunction = (e) => {
    let textInput = e.target.value
    setUserName(textInput)
  }

  return (

    <React.Fragment>
      <div className="App">

        <Route exact path="/" 
            render={() => (<LandingPage  setLocation={handlePickUpLocationClick} setVehicleType={handleVehicleTypeClick} setCalendarDates={calendarDates} />)} />

        <Route exact path="/login"
            render={() => (<LogIn />)} />

        <Route exact path="/users"
            render={() => (<Users setUserName={setUserNameFunction} />)} />

        <Route exact path="/reservations"
            render={() => (<Reservations userName={userName}/>)} />


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

