import React, { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

import Dude from '../assets/images/dude.png'
import Benz from '../assets/images/benz.png'
import ArrowRight from '../assets/images/arrow-right.svg'

const SectionSix = props => {

  const [animationRan, setAnimationRan] = useState(false)
  const [sectionRef, inView] = useInView({threshold: 0.6})
  // animation refs
  const dudeContainerRef = useRef()
  const dudeRef = useRef()
  const carRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    if (!props.isMobile && inView && !animationRan) {
      // animations
      gsap.to([dudeContainerRef.current], {x: 0, duration: 0.5})
      gsap.to([dudeRef.current], {x: 0, opacity: 1, duration: 0.5, delay: 0.25})
      gsap.to([carRef.current], {right: '-70%', opacity: 1, duration: 0.5, delay: 0.25})
      gsap.to([textRef.current], {y: 0, opacity: 1, duration: 0.5, delay: 0.5})
      setAnimationRan(true)
    }
  })

  return (
    <section id="section-six" ref={sectionRef}>
      <div className="dude-container" ref={dudeContainerRef}>
        <img className="dude" src={Dude} alt="Dude" ref={dudeRef}/>
        <img className="benz" src={Benz} alt="Benz" ref={carRef}/>
      </div>
      <div className="text" ref={textRef}>
        <h2>CUSTOMERS WITH THAT NEW CAR SMELL</h2>
        <p>“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”</p>
        <h5>Alex Bateman,   Interface Designer</h5>
        <button className="cta">Available On the App Store<img src={ArrowRight} alt=""/></button>
      </div>
    </section>
  )
}

export default SectionSix
