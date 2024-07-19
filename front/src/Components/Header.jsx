// src/Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white shadow-lg ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wider">
          MEGA Bank
        </Link>
        <nav className="space-x-10 items-center text-lg">
          <Link to="/" className="hover:text-gray-200 hover:underline transition duration-300">HOME</Link>
          <Link to="/customers" className="hover:text-gray-200 hover:underline transition duration-300">CUSTOMERS</Link>
          <Link to="/transfer" className="hover:text-gray-200 hover:underline transition duration-300">TRANSFER MONEY</Link>
          <Link to="/aboutus" className="hover:text-gray-200 hover:underline transition duration-300">ABOUT US</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
