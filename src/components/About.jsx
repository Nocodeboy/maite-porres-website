import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        backgroundColor: 'var(--color-sage-100)',
                        borderRadius: '20px',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                            alt="Maite Porres"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Sobre Mí</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Soy Maite Porres, psicóloga clínica con más de 10 años de experiencia acompañando a personas en su camino hacia el bienestar emocional.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Mi enfoque integra la terapia cognitivo-conductual con técnicas de mindfulness, creando un espacio seguro y libre de juicios donde puedes explorar tus pensamientos y emociones.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Creo firmemente en la capacidad de cada individuo para sanar y crecer. Mi objetivo es proporcionarte las herramientas necesarias para enfrentar los desafíos de la vida con resiliencia y claridad.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--color-sage-500)' }}>10+</h3>
                            <p>Años de experiencia</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--color-sage-500)' }}>500+</h3>
                            <p>Pacientes atendidos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
