import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredStories = [
    {
      id: 1,
      title: "Trekking the Annapurna Circuit",
      subtitle: "A Journey Through the Himalayas",
      description: "A 12-day journey through the majestic Himalayas, experiencing diverse landscapes and local culture in the Annapurna region.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      highlights: ["32 km of scenic trails", "4 mountain passes", "Ancient monasteries", "Local Sherpa culture"]
    },
    {
      id: 2,
      title: "Exploring the Ancient Temples of Kathmandu",
      subtitle: "Spiritual Heritage & Cultural Wonders",
      description: "Discovering the rich cultural heritage and spiritual sites in Nepal's vibrant capital city and its surrounding valleys.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Michael Chen",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      highlights: ["7 UNESCO sites", "Ancient architecture", "Spiritual experiences", "Local markets"]
    },
    {
      id: 3,
      title: "Wildlife Safari in Chitwan National Park",
      subtitle: "Adventures Among Nepal's Wildlife",
      description: "An unforgettable adventure spotting rhinos, tigers, and exotic birds in Nepal's premier wildlife sanctuary.",
      image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "David Roberts",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      highlights: ["Rare Bengal Tigers", "One-horned Rhinos", "450+ bird species", "Jungle safaris"]
    },
  ];

  const popularDestinations = [
    { name: "Pokhara" },
    { name: "Kathmandu" },
    { name: "Nagarkot" },
    { name: "Chitwan" },
    { name: "Mustang" },
    { name: "Langtang" },
    { name: "Rara Lake" },
    { name: "Annapurna Base Camp" },
    { name: "Bandipur" },
    { name: "Dhulikhel" },
    { name: "Ilam" },
    { name: "Patan" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const slug = searchQuery.toLowerCase().replace(/\s+/g, '-');
      navigate(`/destination/${slug}`);
    }
  };

  const handleStartWriting = () => {
    navigate('/dashboard');
  };

  const handleViewStory = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  const handleDestinationClick = (destination) => {
    const urlName = destination.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/destination/${urlName}`);
  };

  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero__bg"></div>
        <div className="container hero__content">
          <h1 className="hero__title">Share Your Travel Stories and Memories</h1>
          <p className="hero__subtitle">
            Travel Diaries Nepal is a platform where adventurers, trekkers, and explorers document
            their journeys across the Himalayas. Share your experiences, inspire others, and preserve
            your travel memories forever.
          </p>
          <button className="hero__cta" onClick={handleStartWriting}>
            Start Writing Diary
          </button>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <h2 className="section-title">Search Destination</h2>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for places, stories, or experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Travel Stories */}
      <section className="stories-section" id="trips">
        <div className="container">
          <h2 className="section-title">Featured Travel Stories</h2>
          <div className="stories-grid">
            {featuredStories.map((story) => (
              <article className="story-card" key={story.id}>
                <div className="story-card__image-wrap">
                  <img src={story.image} alt={story.title} className="story-card__image" />
                  <div className="story-card__overlay">
                    <button
                      className="story-card__btn"
                      onClick={() => handleViewStory(story.id)}
                    >
                      Read Full Story
                    </button>
                  </div>
                </div>
                <div className="story-card__body">
                  <span className="story-card__subtitle">{story.subtitle}</span>
                  <h3 className="story-card__title">{story.title}</h3>
                  <p className="story-card__desc">{story.description}</p>
                  <div className="story-card__tags">
                    {story.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="story-card__tag">{highlight}</span>
                    ))}
                  </div>
                  <div className="story-card__meta">
                    <span>By {story.author}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations-section" id="about">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">Explore the most beautiful destinations in Nepal</p>
          <div className="destinations-grid">
            {popularDestinations.map((destination, index) => (
              <button
                className="dest-card"
                key={index}
                onClick={() => handleDestinationClick(destination)}
                title={`Explore ${destination.name}`}
              >
                <span className="dest-card__text">{destination.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
