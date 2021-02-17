import React from 'react'
import Icon from '../assets/images/logo-icon.svg'

export default function Loader() {
  return (
    <section id="loader">
      <div className="icon-container">
        <div className="circle"/>
      </div>
      <img className="icon" src={Icon} alt="Logo"/>
    </section>
  )
}
