import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDestinationBySlug } from '../../data/destinations';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import './DestinationDetail.css';

const DestinationDetail = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [selectedTab, setSelectedTab] = useState('overview');
  const destination = getDestinationBySlug(name);

  return (
    <div className="destination-detail-page">
      <Header />

      {/* Hero Section */}
      <section className="dest-hero">
        <img src={destination.image} alt={destination.name} className="dest-hero__image" />
        <div className="dest-hero__overlay"></div>
        <div className="dest-hero__content">
          <button className="dest-hero__back" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <div className="dest-hero__info">
            <span className="dest-hero__location">📍 {destination.location}</span>
            <h1 className="dest-hero__title">{destination.fullName}</h1>
            <p className="dest-hero__tagline">{destination.tagline}</p>
            <div className="dest-hero__meta">
              <span className="dest-hero__rating">
                ★ {destination.rating}
              </span>
              <span className="dest-hero__divider">•</span>
              <span>{destination.bestTime}</span>
            </div>
            <div className="dest-hero__actions">
              <button
                className="dest-hero__booknow"
                onClick={() =>
                  navigate('/checkout', {
                    state: {
                      name: destination.name,
                      price: destination.pricePerPerson,
                      image: destination.image,
                    },
                  })
                }
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container dest-body">
        {/* Tabs */}
        <nav className="dest-tabs">
          <button
            className={`dest-tab ${selectedTab === 'overview' ? 'active' : ''}`}
            onClick={() => setSelectedTab('overview')}
          >
            Overview
          </button>
          <button
            className={`dest-tab ${selectedTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setSelectedTab('gallery')}
          >
            Gallery
          </button>
        </nav>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <>
            <div className="dest-grid">
              <main className="dest-main">
                {/* About the Place */}
                <section className="dest-section">
                  <h2>About {destination.name}</h2>
                  <p className="dest-about">{destination.about}</p>
                </section>

                {/* Things To Do */}
                <section className="dest-section">
                  <h2>Things To Do</h2>
                  <ul className="dest-todo-list">
                    {destination.thingsToDo.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Best Time To Visit */}
                <section className="dest-section">
                  <h2>Best Time To Visit</h2>
                  <div className="dest-best-time">
                    <p><strong>Recommended months:</strong> {destination.bestTimeMonths?.join(', ') || destination.bestTime}</p>
                    <p><strong>Weather:</strong> {destination.bestTimeWeather}</p>
                    <p><strong>Temperature:</strong> {destination.bestTimeTemp}</p>
                  </div>
                </section>

                {/* Map Section */}
                <section className="dest-section">
                  <h2>Location</h2>
                  <div className="dest-map">
                    <iframe
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${(destination.coordinates?.lng || 85.3) - 0.1},${(destination.coordinates?.lat || 27.7) - 0.1},${(destination.coordinates?.lng || 85.3) + 0.1},${(destination.coordinates?.lat || 27.7) + 0.1}&layer=mapnik&marker=${destination.coordinates?.lat || 27.7},${destination.coordinates?.lng || 85.3}`}
                      title={`Map of ${destination.name}`}
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      loading="lazy"
                    />
                  </div>
                </section>
              </main>

              <aside className="dest-sidebar">
                <WeatherWidget
                  coordinates={destination.coordinates}
                  locationName={destination.name}
                />
                <div className="dest-sidebar-card">
                  <h3>Quick Info</h3>
                  <ul>
                    <li><strong>Elevation:</strong> {destination.elevation}</li>
                    <li><strong>Distance:</strong> {destination.distance}</li>
                    {destination.population && (
                      <li><strong>Population:</strong> {destination.population}</li>
                    )}
                  </ul>
                </div>
                <div className="dest-sidebar-card dest-sidebar-card--cta">
                  <h3>Ready to visit?</h3>
                  <p>Document your journey and share your story.</p>
                  <button
                    className="dest-book-btn"
                    onClick={() => navigate('/create')}
                  >
                    Write Diary Entry
                  </button>
                </div>
              </aside>
            </div>
          </>
        )}

        {/* Gallery Tab */}
        {selectedTab === 'gallery' && (
          <ImageGallery images={destination.images} title={`Photos of ${destination.name}`} />
        )}
      </div>

      {/* CTA Section */}
      <section className="dest-cta">
        <div className="container">
          <h2>Ready to Visit {destination.name}?</h2>
          <p>Plan your trip, document your journey, and share your story with our community</p>
          <div className="dest-cta-buttons">
            <button className="dest-cta-btn dest-cta-btn--primary" onClick={() => navigate('/create')}>
              Write Your Diary
            </button>
            <button className="dest-cta-btn dest-cta-btn--secondary" onClick={() => navigate('/')}>
              Explore More Destinations
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
