// src/pages/Checkout.jsx
const Checkout = () => {
  return (
    <div style={{ padding: '50px 10%' }}>
      <h1>Secure Checkout</h1>
      <p>Proceed with M-Pesa Payment</p>
      <input type="text" placeholder="Enter M-Pesa Phone Number" />
      <button style={{ background: '#4CAF50', color: 'white', padding: '15px' }}>
        Pay via M-Pesa
      </button>
    </div>
  );
};
export default Checkout;