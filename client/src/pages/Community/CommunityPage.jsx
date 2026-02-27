import React from "react";
import { Link } from "react-router-dom";
import CommunityStoriesPageWithStore from "./CommunityStoriesPage";
import "./Community.css";

const CommunityPage = () => {
  return (
    <div className="community-page">
      <div className="container">
        <header className="community-header">
          <h1>Community</h1>
          <p className="community-subtitle">
            Public diaries shared by the community will appear here.
          </p>
        </header>

        <section className="community-stories-list">
          <CommunityStoriesPageWithStore />
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
