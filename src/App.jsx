import React from 'react';
import WhatsAppFloat from './components/WhatsAppFloat';
import Navigation from './components/navigation';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
// import HowItWorks from './components/HowItWorks';
function App() {

  return (
    <div className='min-h-screen w-full overflow-x-hidden'>
      <Navigation />
      <Hero />
      <About />
      <Services />
      {/* <HowItWorks /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />  
      <WhatsAppFloat />
    </div>
  )
}

export default App;
