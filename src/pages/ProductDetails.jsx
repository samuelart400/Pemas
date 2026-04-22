// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Simulated Database
  const products = [
    { id: '1', name: 'Corporate Shirt', price: 'KSh 1,500', desc: 'Premium cotton blend for daily wear.' },
    { id: '2', name: 'Industrial Overall', price: 'KSh 3,200', desc: 'Heavy-duty, high-visibility, fire retardant fabric.' },
    { id: '3', name: 'Hospitality Apron', price: 'KSh 850', desc: 'Water-resistant and adjustable apron.' },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) return <div style={{ padding: '50px' }}><h2>Product not found</h2></div>;

  return (
    <div style={{ padding: '50px 10%', background: '#f4f4f4', minHeight: '80vh' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#0a1128' }}>{product.name}</h1>
        <p style={{ fontSize: '1.5rem', color: '#c5a059', fontWeight: 'bold' }}>{product.price}</p>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '30px' }}>{product.desc}</p>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={() => window.history.back()}
            style={{ background: '#0a1128', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
          >
            Back to Catalog
          </button>
          
          <Link to={`/checkout/${id}`}>
            <button style={{ background: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;