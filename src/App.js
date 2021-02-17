import React, {useEffect, useState} from 'react'

import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import SectionFive from './sections/SectionFive'
import SectionSix from './sections/SectionSix'
import Footer from './sections/Footer'
import Loader from './sections/Loader'

import './assets/styles/Main.css'

const App = () => {
  let isMobile = window.innerWidth < 1024 ? true : false
  let [pageLoaded, setPageLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true)
    }, 1000);
  })
  return (
    <div className="App">
      {pageLoaded ?
      <main id="lander">
        <SectionOne isMobile={isMobile}/>
        <SectionTwo isMobile={isMobile} />
        <SectionThree isMobile={isMobile} />
        <SectionFour isMobile={isMobile} />
        <SectionFive isMobile={isMobile} />
        <SectionSix isMobile={isMobile} />
        <Footer />
      </main>
      :
      <Loader />
      }
    </div>
  );
}

export default App;
