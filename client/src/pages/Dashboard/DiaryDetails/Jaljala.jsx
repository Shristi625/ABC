import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const JaljalaDiary = () => {
  const navigate = useNavigate();

  const jaljalaLocation = {
    name: "Jaljala",
    district: "Rolpa",
    elevation: 2100,
    bestTime: "October to November",
    distance: "280 km from Kathmandu",
    tempRange: "5°C - 15°C",
  };

  const jaljalaCoordinates = {
    lat: 28.2,
    lng: 82.5,
  };

  const jaljalaWeather = {
    temp: 12,
    feelsLike: 10,
    condition: "Cool Clear",
    humidity: 52,
    windSpeed: 11,
    uvIndex: 5,
    icon: "🌤️",
  };

  const jaljalaImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Rolling green hills of Jaljala in Rolpa",
      caption: "Endless green hills of Jaljala",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Open grasslands and walking trails in Jaljala",
      caption: "Open grasslands stretching to the horizon",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Distant mountain views from Jaljala hills",
      caption: "Mountains watching from a distance",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Quiet walking paths through Jaljala hills",
      caption: "Solitary paths through the hills",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Local rural scenery in Jaljala",
      caption: "Simple life in the hills",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset over peaceful hills of Jaljala",
      caption: "Evening light painting the hills",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Calm evening sky over Jaljala",
      caption: "Night falling over silent hills",
    },
  ];

  return (
    <div className="jaljala-diary">
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
            <span className="logo-subtext">Jaljala Journal</span>
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
            src={jaljalaImages[0].url}
            alt={jaljalaImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Jaljala, Rolpa, Nepal</span>
              <h1 className="hero-title">
                Jaljala (Rolpa) – Natural & Peaceful Hills
              </h1>
              <p className="hero-date">
                March 10, 2024 • 1 day • Calm & Clear, 15°C
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
              <h2 className="section-title">Where Silence Feels Natural</h2>
              <p className="lead-paragraph">
                Jaljala is a place where you can hear your own thoughts. The
                hills roll gently, the wind whispers through grass, and the only
                company is the open sky and your own quiet footsteps.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={jaljalaLocation}
            coordinates={jaljalaCoordinates}
            weather={jaljalaWeather}
          />

          {/* Image Grid 1 - Hills */}
          <section className="image-section">
            <h3 className="image-section-title">Open Skies & Empty Hills</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={jaljalaImages[1].url} alt={jaljalaImages[1].alt} />
                <p className="image-caption">{jaljalaImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img src={jaljalaImages[2].url} alt={jaljalaImages[2].alt} />
                <p className="image-caption">{jaljalaImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              The journey to Jaljala was a slow winding up through smaller hills
              that gradually opened into wider, emptier spaces. The air
              changed—it became cleaner, lighter, carrying the scent of wild
              grass and distant pine. When I stepped out of the vehicle and
              looked around, the first thing I noticed was the silence. Not
              complete silence, but the absence of human noise. Only wind,
              birds, and the sound of my own breathing.
            </p>
            <p>
              I started walking without a particular destination. There were
              paths worn by herders and their animals, faint trails through the
              grass that led from one hilltop to another. I followed one,
              climbing slowly, the only sound the crunch of dry grass under my
              boots. At the top of the first rise, I stopped and turned in a
              circle. Hills in every direction, each one green and soft-looking,
              like giant sleeping animals. No houses, no roads, no power
              lines—just land and sky.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={jaljalaImages[3].url} alt={jaljalaImages[3].alt} />
              <div className="full-image-caption">
                <p>{jaljalaImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              I walked for hours, following ridges that seemed to lead to even
              better views. The wind was constant but gentle, like a companion
              who doesn't need to speak. Occasionally I'd see a shepherd with a
              small flock in the distance, but they were too far to hear or
              speak to, just moving dots on a green canvas. There was a deep
              peace in this emptiness, in knowing I could walk all day and not
              meet another person unless I chose to.
            </p>
            <p>
              At one particularly beautiful viewpoint, I sat on a rock and just
              watched. Clouds formed and dissolved. Shadows of clouds moved
              across the hills, darkening one slope while leaving another bright
              in the sun. A hawk circled overhead, riding thermals without
              moving its wings. Time seemed to slow down, or maybe it was my
              perception of time that changed. Without clocks or schedules,
              without destinations or deadlines, minutes and hours lost their
              urgency.
            </p>
          </section>

          {/* Image Grid 2 - Local Life */}
          <section className="image-section">
            <h3 className="image-section-title">Simple Life in the Hills</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={jaljalaImages[4].url} alt={jaljalaImages[4].alt} />
                <p className="image-caption">{jaljalaImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img src={jaljalaImages[5].url} alt={jaljalaImages[5].alt} />
                <p className="image-caption">{jaljalaImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              In the late afternoon, I came across a small shepherd's hut made
              of stone and wood. An elderly man was sitting outside, mending a
              woven basket. We exchanged greetings, and he invited me to share
              some tea. The tea was strong and smoky, brewed over a small fire.
              We sat in comfortable silence for a while before he spoke.
            </p>
            <p>
              "People think these hills are empty," he said, looking out over
              the landscape. "But they're full. Full of grass, of wind, of
              sunlight. Full of space. When you live in a city, you fill your
              life with things. Here, we fill our lives with space. With quiet.
              With time to notice how the light changes on the hills." He
              paused, sipped his tea. "Which is more valuable, do you think?
              More things, or more space to appreciate what you already have?"
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={jaljalaImages[6].url} alt={jaljalaImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {jaljalaImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Peace Without Noise</h3>
            <div className="conclusion-content">
              <p>
                As evening approached, the light turned golden, then pink, then
                deep blue. Stars began to appear, first one, then another, then
                hundreds. Without any artificial light, the sky was a vast black
                canvas studded with points of light. The wind dropped to a
                whisper, and the temperature fell. I walked back to where I was
                staying, guided by starlight and memory of the path.
              </p>
              <p>
                Jaljala taught me about the value of emptiness. We spend our
                lives filling spaces—our homes with things, our schedules with
                activities, our minds with information. But sometimes what we
                need most is empty space. Space to think. Space to breathe.
                Space where the only sounds are natural ones, where the only
                things to look at are hills and sky.
              </p>
              <p className="final-thought">
                There's a special kind of peace that comes from being somewhere
                without expectations. No famous landmarks to photograph, no
                crowds to navigate, no checklist of sights to see. Just land and
                sky and your own presence. Jaljala offers that—not spectacular
                beauty that demands attention, but quiet beauty that reveals
                itself slowly. It doesn't shout. It whispers. And in the
                whispering, you hear things you've forgotten—your own heartbeat,
                your own thoughts, the simple joy of being alive in a beautiful,
                quiet place.
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
                title={jaljalaLocation.name}
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
            This diary entry was written in Jaljala, Rolpa on March 10, 2024.
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

        .jaljala-diary {
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
          color: #2f855a;
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
          color: #276749;
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
          background: #2f855a;
          color: white;
        }

        .primary-btn:hover {
          background: #276749;
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

export default JaljalaDiary;
