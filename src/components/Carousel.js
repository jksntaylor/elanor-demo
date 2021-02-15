import React from 'react'
import {useState} from 'react'

import ArrowLeft from '../assets/images/arrow-left.svg'
import ArrowRight from '../assets/images/arrow-right.svg'
import LandRover from '../assets/images/land-rover.png'
import Porsche from '../assets/images/porsche-left.png'
import Gauge from '../assets/images/gauge.svg'
import Graph from '../assets/images/line-graph.svg'
import Pump from '../assets/images/pump.svg'

export default function Carousel () {
  const carData = {
    landRover: {
      make: 'Land Rover',
      model: '2019 - RANGE ROVER VELAR',
      mpg: '25/29',
      hp: '247',
      zeroSixty: '6.4',
      img: LandRover
    },
    porsche: {
      make: 'Porsche',
      model: '2019 - 911 CARERRA S',
      mpg: '19/24',
      hp: '443',
      zeroSixty: '3.2',
      img: Porsche
    }
  }
  const [currentCar, setCurrentCar] = useState('landRover')

  const handleClick = () => setCurrentCar(currentCar === 'landRover' ? 'porsche' : 'landRover')

  return (
    <div className="carousel">
      <div className="buttons">
        <img src={ArrowLeft} alt="Arrow Left" onClick={handleClick}/>
        <img src={ArrowRight} alt="Arrow Right" onClick={handleClick}/>
      </div>
      <div className="car-info">
        <h1>{carData[currentCar].make}</h1>
        <h2>{carData[currentCar].model}</h2>
        <div className="mpg">
          <img src={Pump} alt="Gas Pump"/>
          <h4>MPG</h4>
          <h3>{carData[currentCar].mpg}</h3>
        </div>
        <div className="hp">
          <img src={Graph} alt="Line Graph"/>
          <h4>HP</h4>
          <h3>{carData[currentCar].hp}</h3>
        </div>
        <div className="zeroSixty">
          <img src={Gauge} alt="Speedometer"/>
          <h4>0-60</h4>
          <h3>{carData[currentCar].zeroSixty}</h3>
        </div>
      </div>
      <img className="car-image" src={carData[currentCar].img} alt="car"/>
    </div>
  )
}
