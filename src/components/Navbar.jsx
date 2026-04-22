// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      background: '#0a1128', 
      padding: '20px 5%', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      color: 'white',
      flexWrap: 'wrap',
      gap: '20px'
    }}>
      {/* Logo / Brand Name */}
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '2px', color: '#c5a059' }}>
        PEMAS
      </div>

      {/* Navigation Links */}
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '25px',
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Home</Link></li>
        <li><Link to="/catalog" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Catalog</Link></li>
        <li><Link to="/embroidery" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Embroidery</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;