

const AboutPage = () => {
    return (
        <div className="container section">
            <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>About Us</h1>

            {/* Mission Section */}
            <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <h2>Who We Are & Mission</h2>
                <p>
                    Zavičajno Društvo "Sveti Josip" Cerje Letovanićko is a non-profit community association founded in 2011 by residents and friends of Cerje Letovanićko.
                    Our mission is to celebrate and preserve the cultural and spiritual traditions of our village while improving the quality of life for local people.
                    We are named after Saint Joseph (Sveti Josip), our patron, reflecting our strong roots in faith and community values.
                </p>
            </div>

            {/* Our Story */}
            <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <h2>Our Story</h2>
                <p>
                    Cerje Letovanićko is a small rural village with a rich heritage but significant challenges.
                    Seeing that many traditions were fading and some neighbors were struggling, a group of villagers came together to form this society in 2011.
                    Initially focusing on religious and cultural gatherings, we expanded to include broader community development.
                </p>
                <div style={{
                    marginTop: 'var(--spacing-lg)',
                    padding: 'var(--spacing-lg)',
                    backgroundColor: 'var(--color-background-alt)',
                    borderLeft: '4px solid var(--color-primary)'
                }}>
                    <strong>Why Our Work Matters:</strong> Cerje Letovanićko is one of the most vulnerable communities in the region, with over 60% of residents living in poverty.
                    The 2020 earthquake further compounded hardships. Our society brings hope, resources, and unity to those who feel forgotten.
                </div>
            </div>

            {/* Leadership */}
            <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <h2>Leadership & Team</h2>
                <p>
                    We are entirely volunteer-run. Our dedicated board leads with passion and personal connection to the village.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-lg)' }}>
                    <div className="card" style={{ padding: 'var(--spacing-md)', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Željko Smuđ</h4>
                        <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>President</p>
                    </div>
                    <div className="card" style={{ padding: 'var(--spacing-md)', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Kata Kranjčević</h4>
                        <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>Vice President</p>
                    </div>
                    <div className="card" style={{ padding: 'var(--spacing-md)', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Dubravka Jelekovac</h4>
                        <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>Secretary</p>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div>
                <h2>Our Values</h2>
                <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
                    <li><strong>Faith in Action:</strong> Guided by Christian values and empathy.</li>
                    <li><strong>Community Solidarity:</strong> Believing in the power of helping neighbors.</li>
                    <li><strong>Cultural Pride:</strong> Preserving traditions to unite generations.</li>
                    <li><strong>Transparency:</strong> Upholding high standards as a registered non-profit (OIB 25728825566).</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;
