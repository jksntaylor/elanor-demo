import React from 'react'
import {useState} from 'react'

import LandRover from '../assets/images/land-rover.png'
import Porsche from '../assets/images/porsche.png'

export default function Carousel () {
  const carData = {
    landRover: {
      make: 'Land Rover',
      model: '2019 - RANGE ROVER VELAR',
      mpg: '25/29',
      hp: '247',
      zeroSixty: '6.4'
    },
    porsche: {
      make: 'Porsche',
      model: '2019 - 911 Carrera S',
      mpg: '19/24',
      hp: '443',
      zeroSixty: '3.2'
    }
  }
  const [currentCar, setCurrentCar] = useState('landRover')

  const handleClick = () => {
    setCurrentCar(currentCar === 'landRover' ? 'porsche' : 'landRover')
    console.log(carData[currentCar])
  }

  let carImage = currentCar === 'landRover' ? <img src={LandRover}/> : <img src={Porsche}/>

  return (
    <div className="carousel">
      {carImage}
      <button onClick={handleClick}>CHANGE CAR</button>
    </div>
  )
}
