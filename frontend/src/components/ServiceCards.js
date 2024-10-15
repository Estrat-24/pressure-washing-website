import React from 'react';

const ServiceCards = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Residential Washing</h3>
            <p>We provide high-quality pressure washing services for your home, including driveways, walkways, patios, and more.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Commercial Washing</h3>
            <p>Our commercial services include pressure washing for buildings, parking lots, and large surfaces to keep your business looking clean and professional.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Industrial Washing</h3>
            <p>We specialize in pressure washing industrial equipment such as Excavators, Bulldozers, Backhoes, and more!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
