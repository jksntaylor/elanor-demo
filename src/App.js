import React from 'react'

import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import SectionFive from './sections/SectionFive'
import SectionSix from './sections/SectionSix'

import './assets/styles/Main.css'

const App = () => {
  return (
    <div className="App">
      {/* LOADING PAGE */}
      <main id="lander">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        {/* FOOTER */}
      </main>
    </div>
  );
}

export default App;


// CLARIFICATIONS FOR NATE:
// 1. Available On the App should be Available On the App Store?
// 2. favicon is different from logo. intentional?
