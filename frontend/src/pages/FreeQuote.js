import React, { useState } from 'react';

const FreeQuote = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Validate the form fields
  const validateForm = () => {
    if (!name || !phone || !email) {
      setErrorMessage('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('https://my-pressure-washing-backend-ec6d8b7f7bee.herokuapp.com/api/send-quote', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            description,
          }),
        });

        if (response.ok) {
          setSuccessMessage('Thank you for your request! We will contact you shortly.');
          setName('');
          setPhone('');
          setEmail('');
          setDescription('');
          setErrorMessage('');
        } else {
          setErrorMessage('Something went wrong. Please try again later.');
        }
      } catch (error) {
        setErrorMessage('Error submitting the form. Please try again later.');
      }
    }
  };

  return (
    <section id="free-quote" className="py-8 bg-gray-200">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Get Your Free Quote</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
          {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Quick Description of Services Needed"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-lg"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default FreeQuote;
