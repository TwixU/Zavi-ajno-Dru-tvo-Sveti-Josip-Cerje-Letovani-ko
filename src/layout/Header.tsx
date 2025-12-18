import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-md)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    ZSJ Cerje Letovanićko
                </Link>
                <nav>
                    <ul style={{ display: 'flex', gap: 'var(--spacing-lg)', listStyle: 'none' }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/get-involved">Get Involved</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
