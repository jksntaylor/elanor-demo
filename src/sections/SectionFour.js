import React, { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

import PorscheFront from '../assets/images/porsche-front.png'
import VehicleSwap from '../assets/images/vehicle-swap-screenshot.png'

const SectionFour = props => {

  const [animationRan, setAnimationRan] = useState(false)
  const [sectionRef, inView] = useInView({threshold: 0.6})
  // animation references
  const carRef = useRef()
  const screenshotRef = useRef()
  const titleRef = useRef()
  const paragraphRef = useRef()

  useEffect(() => {
    if (!props.isMobile && inView && !animationRan) {
      gsap.to([carRef.current], {x: 0, duration: 0.4})
      gsap.to([screenshotRef.current], {y: 0, opacity: 1, duration: 0.5, delay: 0.3})
      gsap.to([titleRef.current], {y: 0, opacity: 1, duration: 0.5, delay: 0.5})
      gsap.to([paragraphRef.current], {y: 0, opacity: 1, duration: 0.5, delay: 0.6})
      setAnimationRan(true)
    }
  })

  return (
    <section id="section-four" ref={sectionRef}>
      <div className="vehicle-swap" ref={carRef}>
        <img className="porsche-front" src={PorscheFront} alt="Porsche Front"/>
        <img className="screenshot" src={VehicleSwap} alt="Mobile Screenshot" ref={screenshotRef}/>
      </div>
      <div className="text">
        <h2 ref={titleRef}>TRADE IN YOUR CAR EVERY MONTH.</h2>
        <p ref={paragraphRef}>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!</p>
      </div>
    </section>
  )
}

export default SectionFour
