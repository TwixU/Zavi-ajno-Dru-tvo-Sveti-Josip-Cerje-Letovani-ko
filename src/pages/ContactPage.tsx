import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container section">
            <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Contact Us</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-3xl)' }}>
                {/* Contact Info */}
                <div>
                    <h2>Get in Touch</h2>
                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>We'd love to hear from you. Whether you have questions, ideas, or want to partner with us.</p>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h4>Address</h4>
                        <p>Cerje Letovanićko 57<br />44272 Cerje Letovanićko, Croatia</p>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h4>Contact Details</h4>
                        <p><strong>Email:</strong> <a href="mailto:contact@zdsjclcharity.org">contact@zdsjclcharity.org</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+38513698400">+385 1 3698 400</a></p>
                    </div>

                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>
                        <p><em>Note: If you plan to visit, please call ahead so we can greet you.</em></p>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ backgroundColor: 'var(--color-background-alt)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 'bold' }}>Name</label>
                            <input
                                type="text"
                                required
                                style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 'bold' }}>Email</label>
                            <input
                                type="email"
                                required
                                style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 'bold' }}>Message</label>
                            <textarea
                                required
                                rows={5}
                                style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
