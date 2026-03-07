import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients '
import Promise from './components/Promise'
import Awards from './components/Awards.JSX'

function App() {
  

  return (
    <>
      <Navbar/>
    <Hero/>
    <Clients/>
    <Promise/>
    <Awards/>
    </>
  )
}

export default App
