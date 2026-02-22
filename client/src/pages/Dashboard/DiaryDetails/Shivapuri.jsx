import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const ShivapuriDiary = () => {
  const navigate = useNavigate();

  const shivapuriLocation = {
    name: "Shivapuri",
    district: "Kathmandu",
    elevation: 2732,
    bestTime: "October to November",
    distance: "25 km from Kathmandu (1.5-2 hours)",
    tempRange: "5°C - 18°C",
  };

  const shivapuriCoordinates = {
    lat: 27.8,
    lng: 85.4,
  };

  const shivapuriWeather = {
    temp: 13,
    feelsLike: 11,
    condition: "Cool",
    humidity: 55,
    windSpeed: 11,
    uvIndex: 6,
    icon: "🌤️",
    forecast: [
      { day: "Tomorrow", high: 15, low: 9, icon: "🌤️" },
      { day: "Thu", high: 14, low: 8, icon: "☀️" },
      { day: "Fri", high: 12, low: 7, icon: "🌥️" },
      { day: "Sat", high: 13, low: 8, icon: "🌤️" },
    ],
  };

  const shivapuriImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Forest trail of Shivapuri Hill",
      caption: "The green tunnel of Shivapuri forest",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Dense greenery and trees in Shivapuri",
      caption: "Ancient trees and dense undergrowth",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Hiking path with sunlight filtering through trees",
      caption: "Sunlight painting patterns on the trail",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Shivapuri hilltop viewpoint",
      caption: "The quiet summit of Shivapuri",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Nature details like leaves and streams",
      caption: "Small stream crossing the trail",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Distant city view from Shivapuri",
      caption: "Kathmandu valley from above",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Calm evening forest scene",
      caption: "Evening peace in the forest",
    },
  ];

  return (
    <div className="shivapuri-diary">
      {/* Navigation */}
      <nav className="diary-navbar">
        <div className="navbar-content">
          <button className="back-btn" onClick={() => navigate("/dashboard")}>
            <svg
              className="back-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <div className="navbar-logo">
            <span className="logo-text">TravelDiaries</span>
            <span className="logo-subtext">Shivapuri Journal</span>
          </div>
          <div className="navbar-actions">
            <button className="nav-action">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 11h-5" />
              </svg>
              Print
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="hero-section">
        <div className="hero-image-container">
          <img
            src={shivapuriImages[0].url}
            alt={shivapuriImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">
                📍 Shivapuri Hill, Kathmandu
              </span>
              <h1 className="hero-title">
                Shivapuri Hill – Nature & Short Hike
              </h1>
              <p className="hero-date">
                April 25, 2024 • Half day • Fresh & Cool, 16°C
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="diary-content" className="diary-main-content">
        <div className="content-container">
          {/* Introduction */}
          <section className="diary-intro">
            <div className="intro-text">
              <h2 className="section-title">A Green Escape Near the City</h2>
              <p className="lead-paragraph">
                The noise of Kathmandu faded with each step up Shivapuri. Within
                minutes, I was surrounded by forest—tall trees, quiet trails,
                and air that smelled of damp earth and pine. A short hike, a
                deep breath, a moment of peace.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={shivapuriLocation}
            coordinates={shivapuriCoordinates}
            weather={shivapuriWeather}
          />

          {/* Image Grid 1 - Forest */}
          <section className="image-section">
            <h3 className="image-section-title">The Forest Welcomes</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={shivapuriImages[1].url}
                  alt={shivapuriImages[1].alt}
                />
                <p className="image-caption">{shivapuriImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={shivapuriImages[2].url}
                  alt={shivapuriImages[2].alt}
                />
                <p className="image-caption">{shivapuriImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              The trail began gently, winding up through rhododendron and pine.
              The transition was sudden—one moment I could hear distant traffic,
              the next only birdsong and the rustle of leaves. The air changed
              too, becoming cooler, cleaner, carrying the scent of moss and wet
              bark. I walked slowly, letting the forest pace me.
            </p>
            <p>
              There's a particular quality to forest light—sunlight filtered
              through layers of leaves, broken into dancing patterns on the
              path. It moves as the wind moves, creating a living mosaic of
              light and shadow. The sounds layered too: the high call of birds,
              the low hum of insects, the whisper of wind in the treetops, the
              crunch of my own footsteps on the trail. No single sound
              dominated; they blended into a quiet symphony.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={shivapuriImages[3].url} alt={shivapuriImages[3].alt} />
              <div className="full-image-caption">
                <p>{shivapuriImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              I passed other hikers—some moving quickly with purpose, others
              like me, walking slowly, stopping to look at flowers or listen to
              birds. We exchanged nods but not words. There seemed to be an
              unspoken agreement that this was a place for quiet. The few words
              spoken were whispered, as if loud voices might disturb the
              forest's peace.
            </p>
            <p>
              At a small clearing, I stopped to rest on a fallen log. A stream
              nearby made a gentle sound over rocks. I closed my eyes and
              listened. The longer I sat, the more I heard—different bird calls,
              the flutter of wings, the distant chatter of monkeys, the almost
              imperceptible sound of leaves growing. The forest wasn't silent;
              it was full of life making quiet noises.
            </p>
          </section>

          {/* Image Grid 2 - Details */}
          <section className="image-section">
            <h3 className="image-section-title">Small Wonders</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={shivapuriImages[4].url}
                  alt={shivapuriImages[4].alt}
                />
                <p className="image-caption">{shivapuriImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={shivapuriImages[5].url}
                  alt={shivapuriImages[5].alt}
                />
                <p className="image-caption">{shivapuriImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              The summit of Shivapuri isn't dramatic—no sweeping Himalayan views
              here. Instead, there's a quiet clearing with a few benches and a
              view over Kathmandu valley. The city looked small from here, its
              noise reduced to a faint hum. I could see the pattern of streets,
              the patches of green that remain within the urban sprawl, the haze
              that hangs over the valley.
            </p>
            <p>
              I sat for a long time, watching clouds move over the city. There
              was something comforting about seeing my daily life from this
              distance, about being both connected and separate. The city
              continued down there—people working, driving, living their busy
              lives. Up here, time moved differently, measured not by clocks but
              by the movement of shadows across the forest floor.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={shivapuriImages[6].url} alt={shivapuriImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {shivapuriImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Silence in the Trees</h3>
            <div className="conclusion-content">
              <p>
                The walk down was slower, more reflective. The forest felt
                different in the late afternoon light—warmer, gentler. Birds
                were settling for the evening, their calls softer now. The air
                cooled as shadows lengthened. I passed the same stream, the same
                clearings, but they looked different in this light, more golden,
                more peaceful.
              </p>
              <p>
                Shivapuri taught me that you don't need to go far to find
                nature. Sometimes the most powerful escapes are the nearest
                ones. A few hours in the forest can reset your mind, clear the
                noise, remind you of a slower rhythm. The city was waiting when
                I returned, but I returned differently—calmer, quieter, carrying
                some of the forest's peace with me.
              </p>
              <p className="final-thought">
                We think we need grand adventures, weeks in wilderness, distant
                mountains. But sometimes what we need is just a few hours away
                from pavement. A trail that leads upward. Trees that have been
                growing for decades. Birds that sing whether anyone listens or
                not. Shivapuri reminds us that nature isn't somewhere else—it's
                right here, just outside the city, waiting patiently for us to
                remember we need it. And the beautiful thing is, it doesn't ask
                for much. Just a few hours of our time, a little attention, and
                it gives back peace, perspective, and the simple joy of walking
                through green shadows on a quiet afternoon.
              </p>
            </div>
          </section>

          {/* Actions */}
          <div className="action-footer">
            <div className="action-buttons">
              <button className="action-btn primary-btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                Edit Entry
              </button>
              <ShareDownload
                title={shivapuriLocation.name}
                elementId="diary-content"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="diary-footer">
        <div className="footer-content">
          <p className="footer-text">
            This diary entry was written in Shivapuri Hill, Nepal on April 25,
            2024.
          </p>
          <div className="footer-links">
            <span>© 2024 TravelDiaries</span>
            <span>•</span>
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
            <span>•</span>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      {/* CSS Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .shivapuri-diary {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #2c2c2c;
          line-height: 1.7;
        }

        /* Navigation */
        .diary-navbar {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #eaeaea;
          z-index: 100;
          padding: 1rem 0;
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: #555;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          border-color: #888;
          background: #f8f8f8;
        }

        .back-icon {
          stroke-width: 2;
        }

        .navbar-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-text {
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #222;
        }

        .logo-subtext {
          font-size: 0.75rem;
          color: #777;
          margin-top: 2px;
          letter-spacing: 1px;
        }

        .navbar-actions {
          display: flex;
          gap: 1rem;
        }

        .nav-action {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: none;
          color: #666;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s ease;
        }

        .nav-action:hover {
          color: #222;
        }

        /* Hero Section */
        .hero-section {
          width: 100%;
          margin-bottom: 4rem;
        }

        .hero-image-container {
          position: relative;
          height: 70vh;
          min-height: 500px;
          max-height: 800px;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.9);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          display: flex;
          align-items: flex-end;
          padding: 3rem;
        }

        .hero-text {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          color: white;
        }

        .hero-location {
          font-size: 0.9rem;
          letter-spacing: 1px;
          opacity: 0.9;
          margin-bottom: 0.5rem;
          display: block;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 400;
          margin: 0.5rem 0;
          line-height: 1.1;
          letter-spacing: -0.5px;
        }

        .hero-date {
          font-size: 1rem;
          opacity: 0.8;
          margin-top: 1rem;
          font-family: 'Arial', sans-serif;
        }

        /* Main Content */
        .diary-main-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
        }

        .content-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        /* Introduction */
        .diary-intro {
          margin-bottom: 3rem;
          padding-top: 2rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 400;
          color: #333;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #e8f4fc;
          padding-bottom: 0.5rem;
        }

        .lead-paragraph {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #444;
          margin: 0;
        }

        /* Image Sections */
        .image-section {
          margin: 3rem 0;
          padding: 0 2rem;
        }

        .image-section-title {
          font-size: 1.5rem;
          font-weight: 400;
          color: #22543d;
          margin-bottom: 1.5rem;
          text-align: center;
          font-family: 'Arial', sans-serif;
        }

        /* 2 Column Grid */
        .image-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin: 2rem 0;
        }

        .image-card {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .image-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 1rem;
          margin: 0;
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.3s ease;
        }

        .image-card:hover .image-caption {
          opacity: 1;
          transform: translateY(0);
        }

        /* Full Width Image */
        .full-image-section {
          margin: 4rem 0;
          padding: 0 2rem;
        }

        .full-image-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }

        .full-image-card img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .full-image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 2rem;
          text-align: center;
        }

        .full-image-caption p {
          margin: 0;
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Story Sections */
        .story-section {
          margin: 3rem 0;
          padding: 0 2rem;
        }

        .story-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: #333;
          text-align: justify;
        }

        /* Final Image */
        .final-image-card {
          position: relative;
          margin: 4rem 0;
          border-radius: 12px;
          overflow: hidden;
          height: 400px;
        }

        .final-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.85);
        }

        .final-image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .final-image-caption {
          color: white;
          font-size: 1.3rem;
          font-style: italic;
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          margin: 0;
        }

        /* Conclusion */
        .conclusion-section {
          margin: 4rem 0;
          padding: 2rem;
          background: #f0fff4;
          border-radius: 12px;
          border-left: 4px solid #68d391;
        }

        .conclusion-title {
          font-size: 1.8rem;
          font-weight: 400;
          color: #22543d;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .conclusion-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
        }

        .conclusion-content p {
          margin-bottom: 1.5rem;
        }

        .final-thought {
          font-style: italic;
          color: #4a5568;
          border-left: 3px solid #a0aec0;
          padding-left: 1.5rem;
          margin-top: 2rem;
        }

        /* Action Footer */
        .action-footer {
          margin-top: 4rem;
          padding: 2rem;
          border-top: 1px solid #e2e8f0;
        }

        .action-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-btn {
          background: #22543d;
          color: white;
        }

        .primary-btn:hover {
          background: #1a4731;
          transform: translateY(-2px);
        }

        .secondary-btn {
          background: #f7fafc;
          color: #333;
          border: 1px solid #cbd5e0;
        }

        .secondary-btn:hover {
          background: #edf2f7;
          border-color: #a0aec0;
          transform: translateY(-2px);
        }

        .share-btn {
          background: #4299e1;
          color: white;
        }

        .share-btn:hover {
          background: #3182ce;
          transform: translateY(-2px);
        }

        /* Footer */
        .diary-footer {
          background: #2d3748;
          color: white;
          padding: 3rem 2rem;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-text {
          font-size: 0.95rem;
          color: #cbd5e0;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
        }

        .footer-links a {
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
          text-decoration: underline;
        }

        .footer-links span {
          color: #a0aec0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .image-grid-2col {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .hero-image-container {
            height: 50vh;
            min-height: 400px;
          }
          
          .hero-text {
            padding: 0 1rem;
          }
          
          .navbar-content {
            padding: 0 1rem;
          }
          
          .diary-main-content {
            padding: 0 0 3rem;
          }
          
          .full-image-card img {
            height: 400px;
          }
          
          .action-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          
          .action-btn {
            justify-content: center;
          }
          
          .image-section,
          .story-section,
          .full-image-section {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .hero-image-container {
            height: 40vh;
            min-height: 300px;
          }
          
          .image-overlay {
            padding: 2rem 1rem;
          }
          
          .conclusion-section {
            margin: 2rem 1rem;
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ShivapuriDiary;
