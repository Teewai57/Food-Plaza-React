import React from 'react'
import Header from './components/Header'
import HealthyTips from './components/HealthyTips'
import Menu from './components/Menu'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="max-w-6xl mx-auto items-center">
      <Nav />
      <Header />
      <Menu />
      <HealthyTips />
    </div>
  )
}

export default App
