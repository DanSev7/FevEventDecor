import React from 'react';
import Navigation from './components/navigation';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {

  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />  
    </div>
  )
}

export default App
