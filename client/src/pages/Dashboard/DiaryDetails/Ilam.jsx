import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const IlamDiary = () => {
  const navigate = useNavigate();

  const ilamLocation = {
    name: "Ilam",
    district: "Ilam",
    elevation: 1580,
    bestTime: "September to November",
    distance: "450 km from Kathmandu",
    tempRange: "10°C - 24°C",
  };

  const ilamCoordinates = {
    lat: 26.9,
    lng: 87.9,
  };

  const ilamWeather = {
    temp: 22,
    feelsLike: 20,
    condition: "Sunny",
    humidity: 70,
    windSpeed: 8,
    uvIndex: 6,
    icon: "☀️",
  };

  const ilamImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1557170338-2c5bda8daaba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Tea gardens of Ilam stretching over green hills",
      caption: "Endless tea gardens of Ilam",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Rolling green hills of Ilam",
      caption: "Green hills rolling to the horizon",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1567946035771-2e0e1bb82a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Tea pluckers working in Ilam gardens",
      caption: "Morning tea harvest",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Narrow paths through Ilam tea fields",
      caption: "Pathways through the tea gardens",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Viewpoint over Ilam hills",
      caption: "View over the green hills",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset over green landscapes of Ilam",
      caption: "Evening light on the tea gardens",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Calm evening mist over Ilam hills",
      caption: "Mist settling over the tea gardens",
    },
  ];

  return (
    <div className="ilam-diary">
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
            <span className="logo-subtext">Ilam Journal</span>
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
            src={ilamImages[0].url}
            alt={ilamImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Ilam, Nepal</span>
              <h1 className="hero-title">Ilam – Tea Gardens & Green Hills</h1>
              <p className="hero-date">
                April 20, 2024 • 1 day • Fresh & Green, 19°C
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
              <h2 className="section-title">A Morning in Green</h2>
              <p className="lead-paragraph">
                Ilam is a world painted in every shade of green. Tea gardens
                spread across the hills like soft velvet blankets, their perfect
                rows following the contours of the land. The air here tastes of
                fresh leaves, damp earth, and morning mist.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={ilamLocation}
            coordinates={ilamCoordinates}
            weather={ilamWeather}
          />

          {/* Image Grid 1 - Tea Gardens */}
          <section className="image-section">
            <h3 className="image-section-title">The Green Carpet</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={ilamImages[1].url} alt={ilamImages[1].alt} />
                <p className="image-caption">{ilamImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img src={ilamImages[2].url} alt={ilamImages[2].alt} />
                <p className="image-caption">{ilamImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              I arrived in Ilam just as the morning mist was lifting. The tea
              gardens emerged slowly—first as dark green shapes in the fog, then
              as distinct rows of bushes, finally as an endless expanse of green
              that stretched from the road to the hilltops. The air was cool and
              clean, with that particular freshness that comes only from places
              where plants outnumber people.
            </p>
            <p>
              I walked along a narrow path between tea rows. The bushes were
              about waist-high, their leaves shiny with dew. Every now and then,
              I'd pass a tea plucker—usually a woman with a basket on her back,
              her fingers moving with practiced speed as she selected only the
              top two leaves and a bud from each plant. There was a rhythm to
              their work, a quiet focus that seemed in harmony with the
              landscape. They moved slowly down the rows, leaving behind
              perfectly trimmed bushes and filling their baskets with the
              morning's harvest.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={ilamImages[3].url} alt={ilamImages[3].alt} />
              <div className="full-image-caption">
                <p>{ilamImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              At a small tea processing center, I met the manager, a man whose
              family had been growing tea in Ilam for three generations. He
              showed me how the fresh leaves are withered, rolled, oxidized, and
              dried. "It's like alchemy," he said, holding out a handful of
              fresh green leaves. "From these we can make black tea, green tea,
              oolong, white tea—each with its own character. The tea takes its
              flavor from the soil, the altitude, the weather of Ilam. You can
              taste the place in every cup."
            </p>
            <p>
              He brewed a pot of first-flush tea, the highest grade, made from
              the very first leaves of spring. The liquor was pale gold, almost
              clear, with a delicate fragrance that filled the room. We drank it
              without milk or sugar, as he insisted was proper. The taste was
              unlike any tea I'd had before—light, floral, with a subtle
              sweetness and no bitterness. "This is what Ilam tastes like," he
              said, smiling. "Green hills, clean air, morning mist."
            </p>
          </section>

          {/* Image Grid 2 - Hills & Views */}
          <section className="image-section">
            <h3 className="image-section-title">Hills That Breathe</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={ilamImages[4].url} alt={ilamImages[4].alt} />
                <p className="image-caption">{ilamImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img src={ilamImages[5].url} alt={ilamImages[5].alt} />
                <p className="image-caption">{ilamImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              I climbed to a viewpoint above the tea gardens. From there, I
              could see the pattern of the landscape—the neat rows of tea, the
              darker green of natural forests, the occasional red roof of a
              farmhouse, all set against the deeper blue-green of more distant
              hills. The air was so clear I could see individual trees miles
              away. There was no sound except the wind in the tea bushes and the
              distant call of a bird.
            </p>
            <p>
              I sat for a long time, watching clouds form and dissolve over the
              hills. The light changed constantly—bright sun one moment, soft
              shadow the next as clouds passed overhead. In the valleys below,
              mist gathered and rose, then dissipated in the warming air. There
              was a deep peace here, a sense that everything was growing
              according to its own rhythm—the tea, the trees, the grass, all
              taking their time, all turning sunlight into green.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={ilamImages[6].url} alt={ilamImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">{ilamImages[6].caption}</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Where Everything Feels Green</h3>
            <div className="conclusion-content">
              <p>
                As evening approached, a soft mist began to settle over the tea
                gardens. The green of the hills deepened, then blurred at the
                edges as the mist thickened. Lights appeared in farmhouses, warm
                yellow points in the gathering blue of dusk. The air grew
                cooler, carrying now the smell of woodsmoke along with the scent
                of tea leaves. The day's work was done; the tea pluckers had
                gone home, their baskets full.
              </p>
              <p>
                Ilam teaches you about slowness. About how tea bushes grow leaf
                by leaf, how mist rises and falls with the temperature, how a
                landscape can be both cultivated and wild. The tea gardens are a
                human creation, yes—rows planted, bushes trimmed, leaves
                harvested. But they feel like part of the natural world, as if
                the hills themselves decided to grow tea instead of forest.
                There's no conflict here between human need and natural beauty;
                they're the same thing.
              </p>
              <p className="final-thought">
                We spend our lives rushing, but places like Ilam remind us that
                some things cannot be hurried. Tea grows at its own pace. Mist
                rises when the air cools. The green of the hills changes with
                the light. In a world that values speed, Ilam offers the deep
                satisfaction of slowness—the slow growth of plants, the slow
                changing of seasons, the slow brewing of a perfect cup of tea.
                Sometimes what we need most is not more excitement, but more
                green. More quiet. More time to watch the mist settle over hills
                that have been doing this for centuries, and will continue long
                after we're gone.
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
                title={ilamLocation.name}
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
            This diary entry was written in Ilam, Nepal on April 20, 2024.
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

        .ilam-diary {
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
          color: #276749;
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
          background: #276749;
          color: white;
        }

        .primary-btn:hover {
          background: #22543d;
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

export default IlamDiary;
