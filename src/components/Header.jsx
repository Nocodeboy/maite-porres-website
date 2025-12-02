import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{
      padding: '1.5rem 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(250, 250, 249, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--color-sage-900)' }}>
          Maite Porres
        </div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
