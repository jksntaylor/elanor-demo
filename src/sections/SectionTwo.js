import React, { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
  const [transitionRunning, setTransitionRunning] = useState(false)

  // this is ugly code I'm aware, but it works.
  const handleClick = () => {
    if (props.isMobile) {
      setCurrentCar(currentCar === 'landRover' ? 'porsche' : 'landRover')
      return
    }
    if (transitionRunning) return
    else setTransitionRunning(true)

    if (!props.isMobile && currentCar === 'landRover') {
      document.getElementById('landRover-info').className = 'car-info leaving'
      document.getElementById('porsche-info').className = 'car-info entering'
      document.getElementById('landRover-image').className = 'car-image leaving'
      document.getElementById('porsche-image').className = 'car-image entering'
      setTimeout(() => {
        document.getElementById('landRover-info').className = 'car-info hidden'
        document.getElementById('porsche-info').className = 'car-info visible'
        document.getElementById('landRover-image').className = 'car-image hidden'
        document.getElementById('porsche-image').className = 'car-image visible'
      }, 500);
      setTimeout(() => {
        setTransitionRunning(false)
      }, 600);
    }
    else if (!props.isMobile) {
      document.getElementById('landRover-info').className = 'car-info entering'
      document.getElementById('porsche-info').className = 'car-info leaving'
      document.getElementById('landRover-image').className = 'car-image entering'
      document.getElementById('porsche-image').className = 'car-image leaving'
      setTimeout(() => {
      document.getElementById('landRover-info').className = 'car-info visible'
      document.getElementById('porsche-info').className = 'car-info hidden'
      document.getElementById('landRover-image').className = 'car-image visible'
      document.getElementById('porsche-image').className = 'car-image hidden'
      }, 500);
      setTimeout(() => {
        setTransitionRunning(false)
      }, 600);
    }
    setCurrentCar(currentCar === 'landRover' ? 'porsche' : 'landRover')
  }

  const [sectionRef, inView] = useInView({threshold: 0.6});
  // animation references
  const carouselRef = useRef()
  const titleRef = useRef()
  const paragraphRef = useRef()
  const carouselContentRef = useRef()

  // transition references
  const landRoverInfoRef = useRef()
  const landRoverImageRef = useRef()
  const porscheInfoRef = useRef()
  const porscheImageRef = useRef()

  useEffect(() => {
    if (!props.isMobile && inView && !animationRan) {
      // animations
      gsap.to([landRoverInfoRef.current], {opacity: 1, duration: 0.1})
      gsap.to([carouselRef.current], {scaleX: 1})
      gsap.to([landRoverImageRef.current], {x: 0, opacity: 1, delay: 0.2})
      gsap.to([titleRef.current], {y: 0, opacity: 1, delay: 0.2})
      gsap.to([paragraphRef.current], {y: 0, opacity: 1, delay: 0.5})
      gsap.to([carouselContentRef.current], {opacity: 1, delay: 0.6})
      setAnimationRan(true)
    }
  })

  return (
    <section id="section-two" ref={sectionRef}>
        <div className="carousel" ref={carouselRef}>
          <div className="content" ref={carouselContentRef}>
            <div className="buttons">
              <img src={ArrowLeft} alt="Arrow Left" onClick={handleClick}/>
              <img src={ArrowRight} alt="Arrow Right" onClick={handleClick}/>
            </div>
            {!props.isMobile ?
            <div className="car-info-transition-container">
              <div id="landRover-info" className="car-info visible" ref={landRoverInfoRef}>
                <h1>{carData.landRover.make}</h1>
                <h2>{carData.landRover.model}</h2>
                <div className="mpg">
                  <img src={Pump} alt="Gas Pump"/>
                  <h4>MPG</h4>
                  <h3>{carData.landRover.mpg}</h3>
                </div>
                <div className="hp">
                  <img src={Graph} alt="Line Graph"/>
                  <h4>HP</h4>
                  <h3>{carData.landRover.hp}</h3>
                </div>
                <div className="zeroSixty">
                  <img src={Gauge} alt="Speedometer"/>
                  <h4>0-60</h4>
                  <h3>{carData.landRover.zeroSixty}</h3>
                </div>
              </div>
              <div id="porsche-info" className="car-info hidden" ref={porscheInfoRef}>
                <h1>{carData.porsche.make}</h1>
                <h2>{carData.porsche.model}</h2>
                <div className="mpg">
                  <img src={Pump} alt="Gas Pump"/>
                  <h4>MPG</h4>
                  <h3>{carData.porsche.mpg}</h3>
                </div>
                <div className="hp">
                  <img src={Graph} alt="Line Graph"/>
                  <h4>HP</h4>
                  <h3>{carData.porsche.hp}</h3>
                </div>
                <div className="zeroSixty">
                  <img src={Gauge} alt="Speedometer"/>
                  <h4>0-60</h4>
                  <h3>{carData.porsche.zeroSixty}</h3>
                </div>
              </div>
            </div>
            :
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
            }
          </div>
          {!props.isMobile && <img id="landRover-image" className="car-image" src={carData.landRover.img} alt="car" ref={landRoverImageRef}/>}
          {!props.isMobile && <img id="porsche-image" className="car-image" src={carData.porsche.img} alt="car" ref={porscheImageRef}/>}
          {props.isMobile && <img className="car-image" src={carData[currentCar].img} alt="car"/>}
        </div>
        <div className="text">
          <h2 ref={titleRef}>SELECT A VEHICLE FROM YOUR PHONE.</h2>
          <p ref={paragraphRef}>Select from a wide range of luxury vehicles in our inventory. Drive it for a month, trade it the next for something else you have always wanted to own.</p>
        </div>
      </section>
  )
}

export default SectionTwo
