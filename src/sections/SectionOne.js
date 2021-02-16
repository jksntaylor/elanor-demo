import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import { ReactComponent as Logo } from '../assets/images/logo.svg'
import ArrowRight from '../assets/images/arrow-right.svg'
import Porsche from '../assets/images/porsche.png'
import Benz from '../assets/images/benz.png'
import Audi from '../assets/images/audi.png'
import Current from '../assets/images/current-vehicle-screenshot.png'

const SectionOne = props => {
  // animation references
  const yellowBgRef = useRef()
  const phoneRef = useRef()
  const carsRef = useRef()
  const h1Ref = useRef()
  const ctaRef = useRef()
  // animations
  useEffect(() => {
    if (!props.isMobile) {
      gsap.to([yellowBgRef.current], {left: 0, duration: 0.5})
      gsap.to([carsRef.current], {x: '-5%', delay: 0.2, duration: 0.5})
      gsap.to([h1Ref.current], {y: 0, opacity: 1, duration: 0.5, delay: 0.5})
      gsap.to([ctaRef.current], {y: 0, opacity: 1, duration: 0.5, delay: 0.6})
      gsap.to([phoneRef.current], {right: '8%', opacity: 1, duration: 0.5, delay:0.5})
    }
  }, [])

  return (
    <section id="section-one">
        <div className="yellow-bg" ref={yellowBgRef}/>
        <Logo className="logo-white"/>
        <h1 ref={h1Ref}>DRIVE A NEW<br/>CAR EVERY MONTH.</h1>
        <button className="cta" ref={ctaRef}>Available On the App Store<img src={ArrowRight} alt="arrow right"/></button>
        <div className="car-images" ref={carsRef}>
          <img src={Porsche} alt="Porsche" className="car porsche"/>
          <img src={Benz} alt="Mercedes Benz" className="car benz"/>
          <img src={Audi} alt="Audi" className="car audi"/>
        </div>
        <img src={Current} alt="Elanor Mobile App" className="phone" ref={phoneRef}/>
      </section>
  )
}

export default SectionOne
