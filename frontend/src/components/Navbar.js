import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // To enable navigation between pages

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-gray-400">A&M Pressure Washing</Link>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h32M4 12h32M4 18h32" />
          </svg>
        </button>
        <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link to="/" className="text-white hover:text-gray-400 block py-2">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400 block py-2">About Us</Link>
          </li>
          <li>
            <Link to="/reviews" className="text-white hover:text-gray-400 block py-2">Reviews</Link>
          </li>
          <li>
            <Link to="/free-quote" className="text-white hover:text-gray-400 block py-2">Free Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
