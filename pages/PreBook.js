import React from 'react';
import './pay.css';

const PaymentDetails = () => {
  return (
    <div className="container1">
      <h1>Payment Details</h1>
      <form action="/submit_payment" method="post">
        <label htmlFor="card-name">Name on Card</label>
        <input type="text" id="card-name" name="card_name" required />

        <label htmlFor="card-number">Card Number</label>
        <input type="text" id="card-number" name="card_number" required />

        <label htmlFor="exp-month">Expiry Month</label>
        <input type="text" id="exp-month" name="exp_month" required />

        <label htmlFor="exp-year">Expiry Year</label>
        <input type="text" id="exp-year" name="exp_year" required />

        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" required />

        <button type="submit1">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentDetails;
