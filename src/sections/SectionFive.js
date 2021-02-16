import React, { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

import Coin from '../assets/images/coin.svg'
import Document from '../assets/images/document.svg'
import Wrench from '../assets/images/wrench.svg'

const SectionFive = props => {
  const [animationRan, setAnimationRan] = useState()
  const [sectionRef, inView] = useInView({threshold: 0.8})

  const featureOneRef = useRef();
  const featureTwoRef = useRef();
  const featureThreeRef = useRef();
  useEffect(() => {
    if (!props.isMobile && inView && !animationRan) {
      // animations
      gsap.from([featureOneRef.current], {y: '-25%', opacity: 0,})
      gsap.from([featureTwoRef.current], {y: '-25%', opacity: 0, delay: 0.2})
      gsap.from([featureThreeRef.current], {y: '-25%', opacity: 0, delay: 0.4})
      setAnimationRan(true)
    }
  })

  return (
    <section id="section-five" ref={sectionRef}>
      <div className="feature" ref={featureOneRef}>
        <img src={Coin} alt="Coin"/>
        <h3>SIMPLE MONTHLY PRICING</h3>
        <p>Pick your plan, pay the monthly price.  Thats it.  No hidden fees!</p>
      </div>
      <div className="feature" ref={featureTwoRef}>
        <img src={Document} alt="Document"/>
        <h3>VEHICLE INSURANCE INCLUDED</h3>
        <p>That’s right, you’re covered.  All Eleanor plans include insurance coverage.</p>
      </div>
      <div className="feature" ref={featureThreeRef}>
        <img src={Wrench} alt="Wrench"/>
        <h3>MAINTENANCE IS COVERED</h3>
        <p>Leave it us.  Don’t worry about maintaining your vehicle.  Eleanor covers that as well.</p>
      </div>
    </section>
  )
}

export default SectionFive
