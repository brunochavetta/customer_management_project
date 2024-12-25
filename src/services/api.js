import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const api = {
  getCustomers: async () => {
    const response = await axios.get(`${API_URL}/customer`);
    return response.data;
  },

  getCustomerById: async (id) => {
    const response = await axios.get(`${API_URL}/customer/${id}`);
    return response.data;
  },

  createCustomer: async (customer) => {
    const response = await axios.post(`${API_URL}/customer`, customer);
    return response.data;
  },

  updateCustomer: async (id, customer) => {
    const response = await axios.put(`${API_URL}/customer/${id}`, customer);
    return response.data;
  },

  deleteCustomer: async (id) => {
    await axios.delete(`${API_URL}/customer/${id}`);
  }
};