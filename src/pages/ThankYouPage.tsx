import { Link } from 'react-router-dom';

const ThankYouPage = () => {
    return (
        <div className="container section" style={{ textAlign: 'center', padding: 'var(--spacing-3xl) 0' }}>
            <div style={{
                backgroundColor: 'var(--color-background-alt)',
                padding: 'var(--spacing-2xl)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <h1 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-lg)' }}>Thank You!</h1>
                <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-xl)' }}>
                    Your message has been sent successfully. We appreciate you reaching out to Zavičajno Društvo "Sveti Josip".
                </p>
                <p style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-light)' }}>
                    We will get back to you as soon as possible.
                </p>
                <Link to="/" className="btn btn-primary">
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default ThankYouPage;
