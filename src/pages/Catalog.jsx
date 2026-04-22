// src/pages/Catalog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const products = [
    { id: '1', name: 'Corporate Shirt', price: 'KSh 1,500' },
    { id: '2', name: 'Industrial Overall', price: 'KSh 3,200' },
    { id: '3', name: 'Hospitality Apron', price: 'KSh 850' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Collection</h1>
      <div className="responsive-grid" style={{ marginTop: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>{product.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#c5a059' }}>{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button style={{ marginTop: '10px', padding: '10px', cursor: 'pointer' }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;