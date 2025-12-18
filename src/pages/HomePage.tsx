import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--color-background-alt)',
                padding: 'var(--spacing-3xl) 0',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(170, 30, 43, 0.8)), url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80")', // Placeholder fitting heritage/rural theme
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', color: 'white', marginBottom: 'var(--spacing-lg)' }}>
                        Preserving Heritage, Inspiring Community
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>
                        Zavičajno Društvo "Sveti Josip" Cerje Letovanićko is dedicated to preserving our village’s cultural and spiritual heritage and supporting our community’s well-being.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
                        <Link to="/get-involved" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
                            Donate
                        </Link>
                        <Link to="/get-involved" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                            Volunteer
                        </Link>
                        <Link to="/programs" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission / Intro */}
            <section className="section container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ color: 'var(--color-primary)' }}>Keeping the Spirit Alive</h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)' }}>
                        We strive to keep the spirit of Cerje Letovanićko alive through tradition, faith, and care for our neighbors.
                        Founded in 2011, we have over 14 years of community service, working as a 100% volunteer-led non-profit to ensure transparency and accountability.
                    </p>
                </div>
            </section>

            {/* Key Stats / Highlights */}
            <section className="section" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
                        {/* Stat 1 */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: 'var(--spacing-xl)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ color: 'var(--color-accent)', fontSize: 'var(--font-size-2xl)' }}>14+ Years</h3>
                            <p style={{ fontWeight: 'bold' }}>Community Service</p>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>Founded in 2011, committed to long-term impact.</p>
                        </div>
                        {/* Stat 2 */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: 'var(--spacing-xl)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-2xl)' }}>100%</h3>
                            <p style={{ fontWeight: 'bold' }}>Volunteer Led</p>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>Registered non-profit ensuring transparency.</p>
                        </div>
                        {/* Stat 3 */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: 'var(--spacing-xl)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ color: 'var(--color-primary)', fontSize: 'var(--font-size-2xl)' }}>30+ Families</h3>
                            <p style={{ fontWeight: 'bold' }}>Helped Annually</p>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>Delivering food and essentials to vulnerable neighbors.</p>
                        </div>
                        {/* Stat 4 */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: 'var(--spacing-xl)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ color: 'var(--color-accent)', fontSize: 'var(--font-size-2xl)' }}>Culture</h3>
                            <p style={{ fontWeight: 'bold' }}>& Faith</p>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>Annual festivals, pilgrimages, and St. Joseph's Day events.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: 'var(--font-size-3xl)' }}>Get Involved</h2>
                <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
                    Join us in making a difference. Whether you volunteer at events or donate to our projects, your support helps keep our heritage alive and lends a helping hand to those who need it most.
                </p>
                <Link to="/get-involved" className="btn btn-primary" style={{ fontSize: 'var(--font-size-lg)', padding: 'var(--spacing-md) var(--spacing-2xl)' }}>
                    Join Our Mission
                </Link>
            </section>
        </div>
    );
};

export default HomePage;
