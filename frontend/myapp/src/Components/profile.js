import React, { useState, useEffect } from 'react';

const CustomerDetails = () => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Fetch customer details from the server
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = async () => {
    try {
      const response = await fetch('/customer/viewcustomer');
      const data = await response.json();
      setCustomer(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch('/customer/deleteaccount', {
        method: 'DELETE',
      });
      if (response.status === 200) {
        // Account deleted successfully, perform any necessary actions
        // such as redirecting to a login page or displaying a success message
      } else {
        console.error('Account deletion failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateAccount = async () => {
    // Perform necessary actions to update account details
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Address: {customer.address}</p>
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <button onClick={handleUpdateAccount}>Update Account</button>
    </div>
  );
};

export default CustomerDetails;
