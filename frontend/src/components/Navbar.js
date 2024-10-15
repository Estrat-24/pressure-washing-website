import React from 'react';
import { Link } from 'react-router-dom'; // To enable navigation between pages

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-gray-400">A&M Pressure Washing</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
          </li>
          <li>
            <Link to="/reviews" className="text-white hover:text-gray-400">Reviews</Link>
          </li>
          <li>
            <Link to="/free-quote" className="text-white hover:text-gray-400">Free Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
