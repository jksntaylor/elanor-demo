import React from 'react'

import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import SectionFive from './sections/SectionFive'
import SectionSix from './sections/SectionSix'
import Footer from './sections/Footer'

import './assets/styles/Main.css'

const App = () => {
  let isMobile = window.innerWidth < 1024 ? true : false
  return (
    <div className="App">
      {/* LOADING PAGE */}
      <main id="lander">
        <SectionOne isMobile={isMobile}/>
        <SectionTwo isMobile={isMobile} />
        <SectionThree isMobile={isMobile} />
        <SectionFour isMobile={isMobile} />
        <SectionFive isMobile={isMobile} />
        <SectionSix isMobile={isMobile} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
