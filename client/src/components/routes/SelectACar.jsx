import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import CarBar from "../../images/Group.png"
import BlueBar from "../../images/RectangleCopy3x.png"
import useAxios from 'axios-hooks'




function SelectACar(props) {
  const [{ data, loading, error }, refetch] = useAxios(

  )



  return (
    <div className="select-car-div">

      {/* Progress Bar */}

      <div style={
        {
          backgroundImage: `url(${CarBar})`

        }
      } className="select-a-car-bar">
      </div>


      {/* Blue Bar */}

      <div className="blue-bar-container">
        <div style={
          {
            backgroundImage: `url(${BlueBar})`
          }
        } className="blue-bar">
        </div>

        <div className="blue-bar-text">Save on eco-friendly vehicles! See pricing below.</div>
      </div>

      {/* Car Fliters */}
      <div className="car-filter-container">
        <div className="car-filter"></div>
        <div className="car-type"></div>
      </div>

      {/* Cars */}

      <div className="car-info-container">

        <div className="single-car-info-container">
          <div className="economy-car-picture"></div>
          <div>
            <h1>Economy</h1>
            <h1>!!!!CAR NAME!!!!</h1>
            <h1>View more info</h1>
          </div>
        </div>


        <div className="single-car-info-container">
        <div className="compact-car-picture"></div>
        <div>
        <h1>Compact</h1>
        <h1>!!!!CAR NAME!!!!</h1>
        <h1>View more info</h1>
      </div>
      </div>
      </div>



    </div>



  )
}



export default SelectACar