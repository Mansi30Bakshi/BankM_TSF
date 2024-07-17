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
      await axios.post('http://localhost:5000/transfers', {
        from: fromCustomer,
        to: toCustomer,
        amount
      });
      alert('Transfer successful');
      navigate('/customers');
    } catch (error) {
      alert('Transfer failed: ' + error.response.data);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Transfer Money</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2">From Customer</label>
          <select
            value={fromCustomer}
            onChange={(e) => setFromCustomer(e.target.value)}
            className="block w-full px-3 py-2 border rounded"
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
        <div className="mb-5">
          <label className="block mb-2">To Customer</label>
          <select
            value={toCustomer}
            onChange={(e) => setToCustomer(e.target.value)}
            className="block w-full px-3 py-2 border rounded"
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
        <div className="mb-5">
          <label className="block mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded"
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default Transfer;
