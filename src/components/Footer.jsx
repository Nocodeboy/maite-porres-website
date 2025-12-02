import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-sage-900)', color: 'var(--color-sage-100)', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Maite Porres</h3>
                        <p style={{ opacity: 0.8 }}>Psicología Clínica y Bienestar</p>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'white', opacity: 0.8 }}>Instagram</a>
                        <a href="#" style={{ color: 'white', opacity: 0.8 }}>LinkedIn</a>
                    </div>
                </div>
                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Maite Porres. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
