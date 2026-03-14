import React from 'react'
import Navbar from './components/common/Navbar'
import HeroSection from './components/HeroSection'
import BetterTech from './components/BetterTech'
import BehindRabbit from './components/BehindRabbit'
import RealPeople from './components/RealPeople'
import WorkedRabbit from './components/WorkedRabbit'
// import RealStories from './components/RealStories'


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BetterTech />
      <BehindRabbit />
      <RealPeople />
      <WorkedRabbit />
      {/* <RealStories /> */}
    </div>
  )
}

export default App