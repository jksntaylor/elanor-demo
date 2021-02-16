import React, { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Transition, TransitionGroup } from 'react-transition-group'
import { gsap } from 'gsap'

import ArrowLeft from '../assets/images/arrow-left.svg'
import ArrowRight from '../assets/images/arrow-right.svg'
import LandRover from '../assets/images/land-rover.png'
import Porsche from '../assets/images/porsche-left.png'
import Gauge from '../assets/images/gauge.svg'
import Graph from '../assets/images/line-graph.svg'
import Pump from '../assets/images/pump.svg'

const SectionTwo = props => {
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
  const [animationRan, setAnimationRan] = useState(false)

  const handleClick = () => setCurrentCar(currentCar === 'landRover' ? 'porsche' : 'landRover')

  const [sectionRef, inView] = useInView({threshold: 0.6});
  // animation references
  const carouselRef = useRef()
  const carRef = useRef()
  const titleRef = useRef()
  const paragraphRef = useRef()
  const carouselContentRef = useRef()

  useEffect(() => {
    if (!props.isMobile && inView && !animationRan) {
      // animations in delay order
      // todo: convert title to gsap.to
      gsap.to([carouselRef.current], {scaleX: 1})
      gsap.from([carRef.current], {x: '100%', opacity: 0, delay: 0.2})
      gsap.to([titleRef.current], {y: '0', opacity: 1, delay: 0.2})
      gsap.from([paragraphRef.current], {y: '-100%', opacity: 0, delay: 0.5})
      gsap.from([carouselContentRef.current], {opacity: 0, delay: 0.6})
      setAnimationRan(true)
    }
  })

  return (
    <section id="section-two" ref={sectionRef}>
        <div className="carousel" ref={carouselRef}>
          <TransitionGroup>
            <div className="content" ref={carouselContentRef}>
              <div className="buttons">
                <img src={ArrowLeft} alt="Arrow Left" onClick={handleClick}/>
                <img src={ArrowRight} alt="Arrow Right" onClick={handleClick}/>
              </div>
              <Transition>
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
              </Transition>
            </div>
            <Transition>
              <img className="car-image" src={carData[currentCar].img} alt="car" ref={carRef}/>
            </Transition>
          </TransitionGroup>
        </div>
        <div className="text">
          <h2 ref={titleRef}>SELECT A VEHICLE FROM YOUR PHONE.</h2>
          <p ref={paragraphRef}>Select from a wide range of luxury vehicles in our inventory.<br/>Drive it for a month, trade it the next for something else you have always wanted to own.</p>
        </div>
      </section>
  )
}

export default SectionTwo
