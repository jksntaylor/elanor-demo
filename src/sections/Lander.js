import React from 'react'

import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'

import '../assets/styles/Lander.css'

export default function Lander() {
  return (
    <main id="lander">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      {/* FOOTER */}
    </main>
  )
}



// CLARIFICATIONS FOR NATE:
// 1. Available On the App should be Available On the App Store?
// 2. favicon is different from logo. intentional?
// 3. can I use scss and compile it?
