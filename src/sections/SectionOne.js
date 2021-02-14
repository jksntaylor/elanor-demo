import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import { ReactComponent as Logo } from '../assets/images/logo.svg'
import ArrowRight from '../assets/images/arrow-right.svg'
import Porsche from '../assets/images/porsche.png'
import Benz from '../assets/images/benz.png'
import Audi from '../assets/images/audi.png'
import Current from '../assets/images/current-vehicle-screenshot.png'

const SectionOne = () => {
  return (
    <section id="section-one">
        <div className="yellow-bg"/>
        <Logo />
        <h1>DRIVE A NEW<br/>CAR EVERY MONTH.</h1>
        <div className="cta">
          <h4>Available On the App Store</h4>
          <button><img src={ArrowRight} alt="arrow right"/></button>
        </div>
        <div className="car-images">
          <img src={Porsche} alt="Porsche" className="car porsche"/>
          <img src={Benz} alt="Mercedes Benz" className="car benz"/>
          <img src={Audi} alt="Audi" className="car audi"/>
        </div>
        <img src={Current} alt="Elanor Mobile App" className="phone"/>
      </section>
  )
}

export default SectionOne
