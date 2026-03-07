import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients '
import Promise from './components/Promise'
import Awards from './components/Awards.JSX'
import FeaturesSec from './components/FeaturesSec'
import TestimonialsSection  from './components/TestimonialsSection'
import SolutionSection from './components/SolutionSection'
import ResourcesSection from './components/ResourcesSection'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <Navbar/>
    <Hero/>
    <Clients/>
    <Promise/>
    <Awards/>
    <FeaturesSec/>
    <TestimonialsSection/>
    <SolutionSection/>
    <ResourcesSection/>
    <Footer/>
    
    </>
  )
}

export default App
