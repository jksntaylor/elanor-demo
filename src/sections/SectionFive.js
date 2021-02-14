import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Coin from '../assets/images/coin.svg'
import Document from '../assets/images/document.svg'
import Wrench from '../assets/images/wrench.svg'

const SectionFive = props => {
  return (
    <section id="section-five">
      <div className="feature">
        <img src={Coin} alt="Coin"/>
        <h3>SIMPLE MONTHLY PRICING</h3>
        <p>Pick your plan, pay the monthly price.  Thats it.  No hidden fees!</p>
      </div>
      <div className="feature">
        <img src={Document} alt="Document"/>
        <h3>VEHICLE INSURANCE INCLUDED</h3>
        <p>That’s right, you’re covered.  All Eleanor plans include insurance coverage.</p>
      </div>
      <div className="feature">
        <img src={Wrench} alt="Wrench"/>
        <h3>MAINTENANCE IS COVERED</h3>
        <p>Leave it us.  Don’t worry about maintaining your vehicle.  Eleanor covers that as well.</p>
      </div>
    </section>
  )
}

export default SectionFive
