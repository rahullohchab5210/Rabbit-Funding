import React from 'react'
import HeroSection from '../components/HeroSection'
import BetterTech from '../components/BetterTech'
import BehindRabbit from '../components/BehindRabbit'
import RealPeople from '../components/RealPeople'
import WorkedRabbit from '../components/WorkedRabbit'
import RealStories from '../components/RealStories'

function Home() {
  return (
      <>
       <HeroSection />
          <BetterTech />
          <BehindRabbit />
          <RealPeople />
          <WorkedRabbit />
          <RealStories />
      </>
  )
}

export default Home