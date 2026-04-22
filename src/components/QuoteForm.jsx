// src/components/QuoteForm.jsx
import React from 'react';

const QuoteForm = () => {
  return (
    <section id="quote-section" style={{ padding: '60px 10%', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Submit Your Requirements</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        {/* You can add your form fields here */}
        <p>This will be your data intake hub, similar to your Astranovara allocation calculator.</p>
      </div>
    </section>
  );
};

export default QuoteForm;