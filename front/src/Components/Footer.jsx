// src/Components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MEGA Bank. All rights reserved.</p>
        <nav className="space-x-4 mt-2">
          <a href="#" className="hover:text-gray-200 hover:underline transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200 hover:underline transition duration-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-200 hover:underline transition duration-300">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
