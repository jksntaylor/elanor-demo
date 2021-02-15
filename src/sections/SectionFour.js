import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import PorscheFront from '../assets/images/porsche-front.png'
import VehicleSwap from '../assets/images/vehicle-swap-screenshot.png'

const SectionFour = props => {
  return (
    <section id="section-four">
      <div className="vehicle-swap">
        <img className="porsche-front" src={PorscheFront} alt="Porsche Front"/>
        <img className="screenshot" src={VehicleSwap} alt="Mobile Screenshot"/>
      </div>
      <div className="text">
        <h2>TRADE IN YOUR CAR EVERY MONTH.</h2>
        <p>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!</p>
      </div>
    </section>
  )
}

export default SectionFour
