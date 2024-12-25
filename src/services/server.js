import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import customers from '../data.json' assert { type: 'json' };

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Métodos CRUD
app.get('/customer', (req, res) => {
  res.json(customers);
});

app.get('/customer/:id', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.id));
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.post('/customer', (req, res) => {
  const newCustomer = { id: customers.length + 1, ...req.body };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.put('/customer/:id', (req, res) => {
  const customerIndex = customers.findIndex(c => c.id === parseInt(req.params.id));
  if (customerIndex >= 0) {
    customers[customerIndex] = { id: parseInt(req.params.id), ...req.body };
    res.json(customers[customerIndex]);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.delete('/customer/:id', (req, res) => {
  const customerIndex = customers.findIndex(c => c.id === parseInt(req.params.id));
  if (customerIndex >= 0) {
    customers.splice(customerIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
