import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Review from './components/Review'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
      </main>
    </div>
  )
}

export default App