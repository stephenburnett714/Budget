import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import CarBar from "../../images/Group.png"
import BlueBar from "../../images/RectangleCopy3x.png"
import { getCarByType } from "./../../services/apihelper"
import ResultsNav from "../ResultsNav"




function SelectACar(props) {


  const [carList, setCarList] = useState([])
  


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getCarByType(props.vehicleType)
            console.log(response)
            setCarList(response.cars);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData()
}, [])




  return (
    <div><ResultsNav />
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

      {/* Mapping Cars */}
      
      <div className="car-info-container">

      {carList && carList.map((car, index) => {
 



        return (


        <div key={index} className="car-info-container">
             
             <div className="single-car-info-container" >
              <div className="economy-car-picture"></div>
                <div>
                  
                  <div className="car-info-header">{car.size}</div>
                    
                  <div className="car-name-header">{car.make} {car.model}</div>
                     
                     <h4 className="view-more-info">View more vehicle info</h4>

                    <div className="car-info">
                        <div className="small-right-space">Fuel Efficiency: {car.mpg} MPG</div>
                        <div className="small-right-space">Suitcases: {car.luggage}</div>
                        <div className="small-right-space">Passangers: {car.seating}</div>
                        <div className="small-right-space">EPA Rating: 8.2</div>
                    </div>
                      <div className="pay-now-container">     
                        <div className="car-price">${car.price}.00</div>

                          <button  className="pay-now-button " onClick={props.handleSelectedCar} value={index}>
                            <Link to='/results'>Pay Now</Link>
                          </button>
                    </div>
                  </div>
                </div>

        
        </div>
        )
      })}
     
        
        
      </div>
      </div>
      </div>

  )
}


export default SelectACar