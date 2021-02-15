import React from 'react'

import { ReactComponent as Logo } from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer>
      <Logo className="logo-black"/>
      <h6>About Us</h6>
      <h6>Terms of Use</h6>
      <h6>FAQ</h6>
    </footer>
  )
}

export default Footer
