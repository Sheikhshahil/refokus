import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripe from './components/Stripe'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full  bg-zinc-900 text-white'>
      <Navbar></Navbar>
      <Work></Work>
      <Stripes></Stripes>
      <Products></Products>
      <Cards></Cards>
      <Footer></Footer>
      </div>
  )
}

export default App