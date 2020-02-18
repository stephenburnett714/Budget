import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import CarBar from "../../images/Group.png"
import BlueBar from "../../images/RectangleCopy3x.png"



function SelectACar(props) {
    return (
        <div className="select-car-div">
    <div style={
      {
        backgroundImage: `url(${CarBar})`
      }
    } className="select-a-car-bar">
    </div>

    <div style={
      {
        backgroundImage: `url(${BlueBar})`
      }
    } className="blue-bar">
    </div>



        </div>



    )
  }



export default SelectACar