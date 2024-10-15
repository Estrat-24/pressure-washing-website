// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import OurProcess from './components/OurProcess';
import ServiceCards from './components/ServiceCards';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';  // Import the About Us page
import FreeQuote from './pages/FreeQuote';  // Import the Free Quote page
import Reviews from './pages/Reviews';  // Import the Reviews page
import Navbar from './components/Navbar';  // Import the Navbar

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes for each page */}
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <OurProcess />
              <ServiceCards />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/free-quote" element={<FreeQuote />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

