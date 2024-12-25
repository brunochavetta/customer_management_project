import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { api } from './services/api';
import { CustomerForm } from './components/CustomerForm';
import { CustomerTable } from './components/CustomerTable/index';

function App() {
  const [customers, setCustomers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadCustomers = async () => {
    try {
      setIsLoading(true);
      const data = await api.getCustomers();
      setCustomers(data);
    } catch (error) {
      toast.error('Error loading customers');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleCreateCustomer = async (data) => {
    try {
      await api.createCustomer(data);
      toast.success('Customer created successfully');
      loadCustomers();
      setIsFormOpen(false);
    } catch (error) {
      toast.error('Error creating customer');
    }
  };

  const handleUpdateCustomer = async (id, data) => {
    try {
      await api.updateCustomer(id, data);
      toast.success('Customer updated successfully');
      loadCustomers();
      setEditingCustomer(null);
    } catch (error) {
      toast.error('Error updating customer');
    }
  };

  const handleDeleteCustomer = async (id) => {
    if (!window.confirm('Are you sure you want to delete this customer?')) return;

    try {
      await api.deleteCustomer(id);
      toast.success('Customer deleted successfully');
      loadCustomers();
    } catch (error) {
      toast.error('Error deleting customer');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Toaster position="top-right" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Customer
          </button>
        </div>

        {(isFormOpen || editingCustomer) && (
          <CustomerForm
            initialData={editingCustomer}
            onSubmit={(data) => {
              if (editingCustomer) {
                handleUpdateCustomer(editingCustomer.id, data);
              } else {
                handleCreateCustomer(data);
              }
            }}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingCustomer(null);
            }}
          />
        )}

        <CustomerTable
          customers={customers}
          isLoading={isLoading}
          onEdit={setEditingCustomer}
          onDelete={handleDeleteCustomer}
        />
      </div>
    </div>
  );
}

export default App;
