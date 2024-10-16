import React from 'react';

const Reviews = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Customer Reviews</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg italic mb-4">
            "A&M Pressure Washing LLC was contracted to pressure wash my home. Mason and Landon were the team members who showed up on the job site. Both Mason and Landon presented themselves in a truly professional manner, introduced themselves, discussed the job in detail, and got to work without delay. Landon and Mason worked diligently and cleaned up as they went. Both Landon and Mason are the type of person I would want to represent my business. I highly recommend A&M Pressure Washing LLC for all your pressure washing needs."
          </p>
          <p className="text-gray-600 mb-2">- Pat B.</p>
          <p className="text-gray-500">Reviewed on 8/7/23</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

