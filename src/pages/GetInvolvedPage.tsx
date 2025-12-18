

const GetInvolvedPage = () => {
    return (
        <div className="container section">
            <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Get Involved</h1>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--spacing-3xl)' }}>
                There are many ways you can get involved and support our mission. As a small community organization, we deeply appreciate every contribution – be it time, skills, or funds.
            </p>

            <div style={{ display: 'grid', gap: 'var(--spacing-3xl)' }}>
                {/* Donate */}
                <div style={{ backgroundColor: 'var(--color-background-alt)', padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-lg)' }}>
                    <h2 style={{ color: 'var(--color-primary)' }}>Donate</h2>
                    <p>Your financial support directly fuels our programs – from buying food for families in need to funding cultural events.</p>
                    <div style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)', backgroundColor: 'white', borderRadius: 'var(--radius-md)' }}>
                        <p><strong>Bank Transfer (IBAN):</strong> HR5724070001100364990</p>
                        <p><strong>Material Donations:</strong> Clothing, non-perishable food, school supplies.</p>
                        <p><em>For receipts, please contact: <a href="mailto:contact@zdsjclcharity.org">contact@zdsjclcharity.org</a></em></p>
                    </div>
                </div>

                {/* Volunteer */}
                <div style={{ padding: 'var(--spacing-2xl)', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-lg)' }}>
                    <h2 style={{ color: 'var(--color-secondary)' }}>Volunteer</h2>
                    <p>Volunteering with us is a hands-on way to make a difference. We have opportunities for everyone:</p>
                    <ul style={{ marginLeft: '20px', marginTop: 'var(--spacing-sm)' }}>
                        <li>Help organize events</li>
                        <li>Deliver aid packages to the elderly</li>
                        <li>Community clean-up days</li>
                        <li>Professional skills (social work, construction, marketing)</li>
                    </ul>
                    <p style={{ marginTop: 'var(--spacing-md)' }}>Interested? Contact us to discuss current opportunities.</p>
                </div>

                {/* Spread the Word */}
                <div>
                    <h3>Spread the Word</h3>
                    <p>Follow our activities and share our story. If you have connections to potential donors or partners, an introduction can open doors for us.</p>
                </div>

                {/* Transparency */}
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', borderTop: '1px solid #e5e7eb', paddingTop: 'var(--spacing-lg)' }}>
                    <p><strong>Transparency & Accountability:</strong> We are a legally registered non-profit organization in Croatia. We comply with all reporting requirements and maintain careful records of how funds are used. Annual financial statements are filed with FINA.</p>
                </div>
            </div>
        </div>
    );
};

export default GetInvolvedPage;
