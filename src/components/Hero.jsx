// src/components/Hero.jsx
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-container">
      <h1 className="hero-title">Precision Embroidery & Workwear</h1>
      <p className="hero-subtitle">
        We specialize in professional-grade uniform branding. 
        High-durability materials paired with precision digital embroidery 
        to ensure your brand looks its best every single day.
      </p>
      <button className="cta-button" onClick={() => navigate('/contact')}>
        Request a Corporate Quote
      </button>
    </section>
  );
};

export default Hero;