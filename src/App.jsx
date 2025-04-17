import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
      </main>
    </div>
  )
}

export default App