import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-white)', padding: 'var(--spacing-2xl) 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-xl)' }}>
                    <div>
                        <h3>Zavičajno Društvo "Sveti Josip"</h3>
                        <p>Dedicated to preserving cultural heritage and supporting the community of Cerje Letovanićko.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li><Link to="/" style={{ color: 'var(--color-white)' }}>Home</Link></li>
                            <li><Link to="/about" style={{ color: 'var(--color-white)' }}>About Us</Link></li>
                            <li><Link to="/programs" style={{ color: 'var(--color-white)' }}>Programs</Link></li>
                            <li><Link to="/get-involved" style={{ color: 'var(--color-white)' }}>Get Involved</Link></li>
                            <li><Link to="/contact" style={{ color: 'var(--color-white)' }}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact Us</h4>
                        <p>Cerje Letovanićko 57, 44272<br />Cerje Letovanićko, Croatia</p>
                        <p>Email: contact@zdsjclcharity.org</p>
                        <p>Phone: +385 1 3698 400</p>
                    </div>
                </div>
                <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: 'var(--font-size-sm)' }}>
                    <p>&copy; 2025 Zavičajno Društvo "Sveti Josip" Cerje Letovanićko. All rights reserved.</p>
                    <p><Link to="/privacy" style={{ color: 'var(--color-white)', marginRight: '1rem' }}>Privacy Policy</Link> | <Link to="/terms" style={{ color: 'var(--color-white)' }}>Terms of Service</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
