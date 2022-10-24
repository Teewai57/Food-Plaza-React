import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="max-w-6xl mx-auto items-center">
      <Nav />
      <Header />
      <Menu />
    </div>
  )
}

export default App
