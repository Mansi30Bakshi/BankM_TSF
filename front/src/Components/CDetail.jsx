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
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Customer Details</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-xl font-semibold mb-2">Name: {customer.name}</div>
        <div className="text-gray-700 mb-1">Email: {customer.email}</div>
        <div className="text-green-500 font-bold">Balance: ${customer.balance.toFixed(2)}</div>
      </div>
      <br></br>
      <Link to="/transfer" className="inline-block px-14 py-5 bg-blue-800 text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Transfer Money
            </Link>
    </div>
  );
};

export default CDetails;
