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
import ProductList from "./components/ProductList";
import Testimonials from './components/Testimonial'
import Spotlight from './components/VideoSpotlight'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <FeaturedCollections />
      {/* Other sections like Hero, Tagline, Spotlight */}
      <ProductList />
      <About />
      <Testimonials />
      <Spotlight />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
