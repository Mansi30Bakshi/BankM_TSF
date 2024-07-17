import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">All Customers</h1>
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
              {/* <div className="text-gray-700 mb-4">
                <span className="font-medium">Email:</span> {customer.email}
              </div>
              <div className="text-green-500 font-bold text-lg">Balance: ${customer.balance.toFixed(2)}</div> */}
              <div className="text-sm text-gray-500 mt-2">Click for more details</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-300 opacity-0 hover:opacity-25 transition-opacity duration-300 rounded-lg"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customer;
