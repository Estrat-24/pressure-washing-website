import React from 'react';

const OurProcess = () => {
  return (
    <section id="process" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Pressure Washing Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Step 1: FREE Quote</h3>
            <p>Our FREE Quoting Process ensures that everyone has the right to know the price of pressure washing services before you allow our professional team to brighten up your property!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Step 2: Scheduling</h3>
            <p>Our top priority is giving you the best cleaning and service possible! Our first-class team will help you schedule your appointment efficiently and for a time that works best for you!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Step 3: Pressure Washing</h3>
            <p>Using industry-standard equipment, we efficiently clean the surfaces, restoring them to their original shine.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
