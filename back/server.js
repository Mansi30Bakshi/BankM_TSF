const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const Customer = require('./Models/Customer');
const Transfer = require('./Models/Transfer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bank', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/customers', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

app.get('/customers/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.json(customer);
});

app.post('/transfers', async (req, res) => {
  const { from, to, amount } = req.body;

  const fromCustomer = await Customer.findById(from);
  const toCustomer = await Customer.findById(to);

  if (fromCustomer.balance >= amount) {
    fromCustomer.balance -= amount;
    toCustomer.balance += amount;

    await fromCustomer.save();
    await toCustomer.save();

    const transfer = new Transfer({ from, to, amount });
    await transfer.save();

    res.status(200).send('Transfer successful');
  } else {
    res.status(400).send('Insufficient balance');
  }
});

// New endpoint for fetching transfers with populated customer names
app.get('/transfers', async (req, res) => {
  try {
    const transfers = await Transfer.find().populate('from', 'name').populate('to', 'name');
    res.json(transfers);
  } catch (error) {
    res.status(500).send('Error fetching transfers: ' + error.message);
  }
});

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
