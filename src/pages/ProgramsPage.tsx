

const ProgramsPage = () => {
    return (
        <div className="container section">
            <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Our Programs</h1>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--spacing-3xl)' }}>
                We have several key programs that drive our mission, addressing different aspects of our community’s needs and heritage.
            </p>

            <div style={{ display: 'grid', gap: 'var(--spacing-3xl)' }}>
                {/* Program 1 */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-lg)' }}>
                        <h2 style={{ color: 'white', marginBottom: 0 }}>Cultural Heritage & Traditions</h2>
                    </div>
                    <div style={{ padding: 'var(--spacing-xl)' }}>
                        <p><strong>Goal:</strong> Preserve local cultural and faith traditions (St. Joseph’s Day, maintenance of historical sites). We protect tangible and intangible heritage.</p>
                        <p><strong>Who It Serves:</strong> The entire community, youth, and visitors interested in rural Croatian culture.</p>
                        <p><strong>Key Impact:</strong> Annual festivals, pilgrimages to the National Shrine of St. Joseph, and restoration of our chapel.</p>
                    </div>
                </div>

                {/* Program 2 */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: 'var(--spacing-lg)' }}>
                        <h2 style={{ color: 'white', marginBottom: 0 }}>Community Support & Humanitarian Aid</h2>
                    </div>
                    <div style={{ padding: 'var(--spacing-xl)' }}>
                        <p><strong>Goal:</strong> Provide support to vulnerable residents, particularly low-income families and the elderly.</p>
                        <p><strong>Who It Serves:</strong> ~40 remaining villagers, especially those below the poverty line or affected by the 2020 earthquake.</p>
                        <p><strong>Key Impact:</strong> Delivered groceries to 30 vulnerable families in 2022. Home repairs and winter supplies for seniors.</p>
                    </div>
                </div>

                {/* Program 3 */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: 'var(--color-accent)', color: 'white', padding: 'var(--spacing-lg)' }}>
                        <h2 style={{ color: 'white', marginBottom: 0 }}>Community Events & Tourism</h2>
                    </div>
                    <div style={{ padding: 'var(--spacing-xl)' }}>
                        <p><strong>Goal:</strong> Promote local pride and rural tourism through events like "Šumafest" and seasonal fairs.</p>
                        <p><strong>Who It Serves:</strong> Local residents, diaspora, and visitors from neighboring towns.</p>
                        <p><strong>Key Impact:</strong> Collaboration with Lekenik tourist board, participation in regional festivals, and boosting local visibility.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;
