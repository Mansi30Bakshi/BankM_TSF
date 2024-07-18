import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/customers/${id}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error('Error fetching customer details:', error));
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100 p-6">
      <div className="container mx-auto max-w-lg bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Customer Details</h1>
        <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
          <div className="text-2xl font-semibold mb-2 text-gray-700">Name: {customer.name}</div>
          <div className="text-lg text-gray-600 mb-1">Email: {customer.email}</div>
          <div className="text-2xl text-green-500 font-bold">Balance: ${customer.balance.toFixed(2)}</div>
        </div>
        <Link to="/transfer" className="block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md shadow-md hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
          Transfer Money
        </Link>
      </div>
    </div>
  );
};

export default CDetails;
