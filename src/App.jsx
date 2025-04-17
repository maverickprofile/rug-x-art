import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection'
import Tagline from './components/Tagline'
import FeaturedCollections from './components/Featured'
import About from './components/AboutUs'
import Testimonials from './components/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <FeaturedCollections />
      <About />
      <Testimonials />
    </>
  )
}

export default App
