// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Contact us today for a free quote!</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="tel:+15044941331" className="text-white hover:text-gray-400">Call: (504) 494-1331</a>
          <a href="tel:+19858889398" className="text-white hover:text-gray-400">Call: (985) 888-9398</a>
        </div>
        <p className="text-white text-sm mb-4">Email: <a href="mailto:am.washingllc@gmail.com" className="hover:text-gray-400">am.washingllc@gmail.com</a></p>
        <div className="flex justify-center gap-6">
          <a href="https://www.facebook.com/A&M-Pressure-Washing-LLC-105244472664722" className="text-white hover:text-gray-400">Facebook</a>
          <a href="https://www.instagram.com/am_pressurewashingllc" className="text-white hover:text-gray-400">Instagram</a>
          <a href="https://www.yelp.com/biz/a-and-m-pressure-washing-covington-2" className="text-white hover:text-gray-400">Yelp</a>
        </div>
        <p className="text-sm text-gray-400 mt-4">© 2023 A&M Pressure Washing, LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
