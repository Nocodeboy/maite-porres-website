import React from 'react';

const ServiceCard = ({ title, description, icon }) => (
    <div style={{
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'var(--color-sage-100)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            fontSize: '1.5rem'
        }}>
            {icon}
        </div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-stone-800)' }}>{description}</p>
    </div>
);

const Services = () => {
    const services = [
        {
            title: "Terapia Individual",
            description: "Sesiones personalizadas para abordar ansiedad, depresión, estrés y crecimiento personal.",
            icon: "🌱"
        },
        {
            title: "Terapia de Pareja",
            description: "Espacio para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo.",
            icon: "🤝"
        },
        {
            title: "Gestión del Estrés",
            description: "Técnicas prácticas y mindfulness para manejar el estrés laboral y personal.",
            icon: "🍃"
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ backgroundColor: 'var(--color-sage-50)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Mis Servicios</h2>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Ofrezco un enfoque integral adaptado a tus necesidades específicas.
                    </p>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
