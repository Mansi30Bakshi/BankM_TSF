import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    axios.get('http://localhost:5001/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const handleCustomerClick = (customerId) => {
    // Navigate to customer details page programmatically
    navigate(`/customers/${customerId}`);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/7911705/pexels-photo-7911705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
      ></div>
      
      {/* Content */}
      <div className="relative container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-black p-5 shadow-lg">
          ALL CUSTOMERS
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map(customer => (
            <li 
              key={customer._id} 
              className="relative bg-white rounded-lg shadow-lg p-6 hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => handleCustomerClick(customer._id)} // Handle click event
            >
              <div className="block text-blue-600 hover:text-blue-800">
                <div className="absolute top-2 right-2 text-xs bg-green-200 text-green-800 rounded-full px-2 py-1 shadow-md">Customer</div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xl font-semibold">{customer.name}</div>
                </div>
                <div className="text-sm text-gray-500 mt-2">Click for more details</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-300 opacity-0 hover:opacity-25 transition-opacity duration-300 rounded-lg"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Customer;
