import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contacto</h2>
                    <p style={{ fontSize: '1.1rem' }}>Da el primer paso hacia tu bienestar.</p>
                </div>

                <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ flex: 1, minWidth: '300px', maxWidth: '500px' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nombre</label>
                                <input type="text" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-sage-200)',
                                    backgroundColor: 'var(--color-stone-50)',
                                    fontFamily: 'inherit'
                                }} placeholder="Tu nombre" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input type="email" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-sage-200)',
                                    backgroundColor: 'var(--color-stone-50)',
                                    fontFamily: 'inherit'
                                }} placeholder="tu@email.com" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mensaje</label>
                                <textarea rows="5" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-sage-200)',
                                    backgroundColor: 'var(--color-stone-50)',
                                    fontFamily: 'inherit',
                                    resize: 'vertical'
                                }} placeholder="¿En qué puedo ayudarte?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Mensaje</button>
                        </form>
                    </div>

                    <div style={{ flex: 1, minWidth: '300px', maxWidth: '400px', padding: '2rem', backgroundColor: 'var(--color-sage-50)', borderRadius: '16px' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Información</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ubicación</h4>
                                <p>Calle Principal 123, 1º A<br />Madrid, España</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Email</h4>
                                <p>contacto@maiteporres.com</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Teléfono</h4>
                                <p>+34 600 000 000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
