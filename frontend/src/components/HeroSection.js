import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center text-white flex flex-col justify-center items-center p-4"
      style={{ backgroundImage: 'url("https://www.priorityonelawncare.com/wp-content/uploads/2020/01/landscaper-pressure-wash-final-scaled.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to A&M Pressure Washing, LLC</h1>
        <p className="text-xl mb-6">Say goodbye to dirt and grime! Professional and affordable pressure washing services for your home, driveway, and business.</p>
        <Link to="/free-quote" className="bg-green-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition">Get a Free Quote</Link>
      </div>
    </section>
  );
}

export default HeroSection;
