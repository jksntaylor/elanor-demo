import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Dude from '../assets/images/dude.png'
import Benz from '../assets/images/benz.png'
import ArrowRight from '../assets/images/arrow-right.svg'

const SectionSix = () => {
  return (
    <section id="section-six">
      <div className="dude-container">
        <img className="dude" src={Dude} alt="Dude"/>
        <img className="benz" src={Benz} alt="Benz"/>
      </div>
      <div className="text">
        <h2>CUSTOMERS WITH THAT NEW CAR SMELL</h2>
        <p>“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”</p>
        <h5>Alex Bateman,   Interface Designer</h5>
        <button className="cta">Available On the App Store<img src={ArrowRight} alt=""/></button>
      </div>
    </section>
  )
}

export default SectionSix
