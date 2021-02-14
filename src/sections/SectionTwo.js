import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Carousel from '../components/Carousel'

const SectionTwo = () => {
  return (
    <section id="section-two">
        <Carousel />
        <div className="text">
          <h2>SELECT A VEHICLE FROM YOUR PHONE.</h2>
          <p>Select from a wide range of luxury vehicles in our inventory. Drive it for a month, trade it the next for something else you have always wanted to own.</p>
        </div>
      </section>
  )
}

export default SectionTwo
