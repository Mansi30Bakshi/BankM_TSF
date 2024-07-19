import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute inset-0 bg-cover bg-center filter " style={{ backgroundImage: 'url("https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/04/diagonal-split-1.png?fit=1200%2C600&ssl=1")' }}></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="space-y-8">
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30160306/447-768x591.png" alt="Bank Logo" className="mx-auto w-40 h-40 rounded-full shadow-lg" />
            <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">Welcome to MEGA Bank</h1>
            <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
              Your trusted partner in financial services. Secure, reliable, and always here for you.
            </p>
            <Link to="/customers" className="inline-block px-10 py-5 bg-blue-800 text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              View All Customers
            </Link>
            <br></br>
            <Link to="/transfer" className="inline-block px-14 py-5 bg-blue-800 text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              Transfer Money
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
