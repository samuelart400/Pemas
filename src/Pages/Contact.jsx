// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '80px 10%', background: '#f4f4f4', minHeight: '60vh' }}>
      <h1 style={{ color: '#0a1128' }}>Contact Pemas</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
        Ready to start your order? Reach out to our team for professional uniform solutions.
      </p>

      <div style={{ background: '#ffffff', padding: '40px', borderRadius: '8px', maxWidth: '500px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#0a1128', margin: '0' }}>Phone Support</h3>
          <p style={{ fontSize: '1.2rem', color: '#c5a059', fontWeight: 'bold' }}>0712345678</p>
        </div>

        <div>
          <h3 style={{ color: '#0a1128', margin: '0' }}>Social Presence</h3>
          <p style={{ fontSize: '1.1rem' }}>Follow us on TikTok for our latest work:</p>
          <a 
            href="https://www.tiktok.com/@pemas" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}
          >
            @pemas_official
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;