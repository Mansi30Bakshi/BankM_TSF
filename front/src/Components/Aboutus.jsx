import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 p-6 bg-gray-300 align-middle">
      {/* Background Image */}
      {/* <Header/> */}

      {/* Content */}
      <div className="relative container mx-auto max-w-4xl pt-24 pb-12 bg-white rounded-lg shadow-lg align-middle">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">About Us</h1>
        
        <section className="mb-12 px-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-lg text-black leading-relaxed justify-normal">
            At MEGA Bank, our mission is to provide secure and innovative financial solutions that empower our customers to achieve their goals. We are committed to delivering exceptional service and building long-lasting relationships based on trust and integrity.
          </p>
        </section>

        <section className="mb-12 px-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our History</h2>
          <p className="text-lg text-black leading-relaxed">
            Founded in 1990, MEGA Bank has grown from a small local bank to a leading financial institution with a global presence. Our dedication to innovation and customer satisfaction has been the cornerstone of our success, and we continue to evolve to meet the needs of our clients in an ever-changing financial landscape.
          </p>
        </section>

        <section className="px-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-lg text-black leading-relaxed">
            Have questions or want to get in touch with us? Feel free to reach out to our customer service team at <a href="mailto:info@megabank.com" className="text-blue-600 hover:underline">info@megabank.com</a> or call us at <span className="text-blue-600">1-800-123-4567</span>.
          </p>
        </section>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default AboutUs;
