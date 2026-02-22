import React from 'react';
import './Community.css';

const CommunityPage = () => {
  return (
    <div className="community-page">
      <div className="container">
        <header className="community-header">
          <h1>Community</h1>
          <p className="community-subtitle">Public diaries shared by the community will appear here.</p>
        </header>

        <section className="community-placeholder">
          <div className="placeholder-card">
            <h3>No public diaries yet</h3>
            <p>When users set their diaries to public, they'll appear here for everyone to explore.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
