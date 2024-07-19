import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Transfer = () => {
  const [fromCustomer, setFromCustomer] = useState('');
  const [toCustomer, setToCustomer] = useState('');
  const [amount, setAmount] = useState('');
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5001/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/transfers', {
        from: fromCustomer,
        to: toCustomer,
        amount: Number(amount)  // Ensure amount is a number
      });
      alert('Transfer successful');
      navigate('/customers');
    } catch (error) {
      alert('Transfer failed: ' + error.response.data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 p-6">
      <div className="container mx-auto max-w-lg bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Transfer Money</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">From Customer</label>
            <select
              value={fromCustomer}
              onChange={(e) => setFromCustomer(e.target.value)}
              className="block w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 transition duration-200 ease-in-out"
              required
            >
              <option value="" disabled>Select a customer</option>
              {customers.map(customer => (
                <option key={customer._id} value={customer._id}>
                  {customer.name} - ${customer.balance}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">To Customer</label>
            <select
              value={toCustomer}
              onChange={(e) => setToCustomer(e.target.value)}
              className="block w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 transition duration-200 ease-in-out"
              required
            >
              <option value="" disabled>Select a customer</option>
              {customers.map(customer => (
                <option key={customer._id} value={customer._id}>
                  {customer.name} - ${customer.balance}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}  // Ensure input is a number
              className="block w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 transition duration-200 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
