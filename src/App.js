import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import HealthyTips from './components/HealthyTips'
import Menu from './components/Menu'
import Nav from './components/Nav'


const App = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto items-center p-3">
      <Nav />
      <Header />
      <About />
      <Menu />
      <HealthyTips />
    </div>
      <Footer />
    </>
  )
}

export default App
