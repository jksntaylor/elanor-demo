import React from 'react'

import Carousel from '../components/Carousel'

import {ReactComponent as Logo} from '../assets/images/logo.svg'
import Audi from '../assets/images/audi.png'
import Benz from '../assets/images/benz.png'
import Porsche from '../assets/images/porsche.png'
import Current from '../assets/images/current-vehicle-screenshot.png'

import Coin from '../assets/images/coin.svg'
import Document from '../assets/images/document.svg'
import Wrench from '../assets/images/wrench.svg'

import '../assets/styles/Lander.css'

export default function Lander() {
  return (
    <main id="lander">
      <section id="section-one">
          <h1>DRIVE A NEW<br/>CAR EVERY MONTH.</h1>
          <div className="cta">
            <h4>Available On the App Store</h4>
            <button></button>
          </div>
          <div className="car-images">
            <img src={Porsche} alt="Porsche" className="car porsche"/>
            <img src={Benz} alt="Mercedes Benz" className="car benz"/>
            <img src={Audi} alt="Audi" className="car audi"/>
          </div>
          <img src={Current} alt="Elanor Mobile App" className="phone"/>
      </section>
      <section id="section-two">
        <Carousel />
        <div className="text">
          <h2>SELECT A VEHICLE FROM YOUR PHONE.</h2>
          <p>Select from a wide range of luxury vehicles in our inventory. Drive it for a month, trade it the next for something else you have always wanted to own.</p>
        </div>
      </section>
      <section id="section-three">
        <div className="text">
          <h2>DELIVERED TO YOUR DOOR</h2>
          <p>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your door.</p>
        </div>
        <div className="map">

        </div>
      </section>
      <section id="section-four">
        <div className="vehicle-swap">
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
        <div className="text">
          <h2>TRADE IN YOUR CAR EVERY MONTH.</h2>
          <p>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!</p>
        </div>
      </section>
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
      <section id="section-six">
        <div className="text">
          <h2>CUSTOMERS WITH THAT NEW CAR SMELL</h2>
          <p>“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”</p>
          <h5>Alex Bateman,   Interface Designer</h5>
          <div className="cta">
            <h4>Available On the App Store</h4>
            <button></button>
          </div>
        </div>
      </section>
      <footer></footer>
    </main>
  )
}



// CLARIFICATIONS FOR NATE:
// 1. Available On the App should be Available On the App Store?
// 2. favicon is different from logo. intentional?
