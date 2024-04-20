import React, { useState } from 'react';
import axios from 'axios';
import './PaymentPage.css'; // Import the CSS file

function PaymentPage() {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    address: '',
    paymentMethod: 'Card',
    paymentInfo: '',
    cupon: 'SAKIB75',
  });

  const [paymentStatus, setPaymentStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send payment data to backend
      //const response = await axios.post('http://localhost:3000/payment', formData);

      // Handle successful payment
      setPaymentStatus('Your Payment is Successful');
      
      // Clear the cart
      localStorage.removeItem('cartItems');
      // Redirect to home page after a delay
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      console.error('Payment failed:', error);
      setPaymentStatus('Payment Failed. Please try again.');
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Contact No:</label>
          <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="Card">Card</option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
          </select>
        </div>
        <div>
          <label>Payment Info:</label>
          <input type="text" name="paymentInfo" value={formData.paymentInfo} onChange={handleChange} />
        </div>
        <div>
          <label>Cupons:</label>
          <input type="text" name="cupon" value={formData.cupon} onChange={handleChange} />
        </div>
        <button type="submit">Make Payment</button>
      </form>
      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
    </div>
  );
}

export default PaymentPage;
