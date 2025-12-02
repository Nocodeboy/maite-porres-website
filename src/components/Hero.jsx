import React from 'react';

const Hero = () => {
  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '80px',
      backgroundColor: 'var(--color-sage-50)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }} className="fade-in">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-sage-900)' }}>
            Encuentra tu equilibrio interior
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--color-stone-800)', maxWidth: '500px' }}>
            Un espacio seguro para sanar, crecer y redescubrirte. Terapia personalizada para acompañarte en tu proceso.
          </p>
          <a href="#contact" className="btn btn-primary">Reserva tu cita</a>
        </div>
        <div style={{ flex: 1, minWidth: '300px' }} className="fade-in">
          {/* Placeholder for hero image */}
          <div style={{
            width: '100%',
            height: '400px',
            backgroundColor: 'var(--color-sage-200)',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img
              src="/hero.jpg"
              alt="Calming nature scene"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
