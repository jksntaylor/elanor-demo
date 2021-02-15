import React, { useRef, useEffect} from 'react'
import { gsap } from 'gsap'

import Porsche from '../assets/images/porsche.png'
import Delivery from '../assets/images/delivery-screenshot.png'

const SectionThree = () => {
  return (
    <section id="section-three">
      <div className="text">
        <h2>DELIVERED TO YOUR DOOR.</h2>
        <p>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your door.</p>
      </div>
      <div className="map-container">
        <img className="delivery" src={Delivery} alt="Mobile Screenshot"/>
        <img className="porsche" src={Porsche} alt="Porsche"/>
      </div>
    </section>
  )
}

export default SectionThree
