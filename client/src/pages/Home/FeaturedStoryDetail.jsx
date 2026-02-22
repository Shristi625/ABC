import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FeaturedStoryDetail.css';

const FeaturedStoryDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const storiesData = {
    1: {
      title: "Trekking the Annapurna Circuit",
      subtitle: "A Journey Through the Himalayas",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "8 min",
      imageMain: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "Trekking",
      likes: 2840,
      views: 15420,
      content: [
        {
          type: "text",
          text: "The Annapurna Circuit is one of the most spectacular treks in the world. This 12-day journey takes you through some of Nepal's most diverse landscapes, from subtropical forests to high alpine meadows, with views of the majestic Himalayan peaks."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Sunrise over the Annapurna Range"
        },
        {
          type: "text",
          text: "Day 1-3: Our adventure began in Besisahar, a small town at the foothills. We hiked through lush green forests, encountering local farmers and wildlife. The weather was perfect, with clear skies and comfortable temperatures."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Morning walk through pine forests"
        },
        {
          type: "text",
          text: "Day 4-7: We crossed the challenging Poon Hill pass at 3,210 meters. The views were absolutely breathtaking - we could see Dhaulagiri I, one of the highest mountains in the world. At night, we stayed in cozy tea houses run by friendly local families."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Traditional Nepali tea house with mountain views"
        },
        {
          type: "text",
          text: "Day 8-12: The final stretch took us through the Mustang region, where we crossed the Thorung La pass at 5,416 meters. This was the most challenging day, but also the most rewarding. We descended through alpine terrain and eventually reached the end of our journey in Pokhara."
        },
        {
          type: "highlight",
          text: "Key Highlights",
          items: [
            "4 major mountain passes crossed",
            "32 km of scenic trekking trails",
            "Visited 7 ancient monasteries",
            "Experienced authentic Sherpa culture",
            "Witnessed sunrise from Poon Hill",
            "Met local farmers and their families"
          ]
        },
        {
          type: "text",
          text: "The Annapurna Circuit is not just about reaching the destination - it's about the journey itself. The kindness of local people, the beauty of nature, and the sense of achievement make this trek unforgettable. I would highly recommend this adventure to anyone seeking a true connection with the Himalayas."
        }
      ],
      tips: [
        "Best time: September to November and March to May",
        "Duration: 12-16 days",
        "Difficulty: Moderate to Difficult",
        "Best acclimatization starts at 2000m",
        "Pack layers for changing weather",
        "Bring trekking poles to reduce knee strain",
        "Start the trek early in the season"
      ]
    },
    2: {
      title: "Exploring the Ancient Temples of Kathmandu",
      subtitle: "Spiritual Heritage & Cultural Wonders",
      author: "Michael Chen",
      date: "December 10, 2024",
      readTime: "6 min",
      imageMain: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "Culture & Heritage",
      likes: 3120,
      views: 18500,
      content: [
        {
          type: "text",
          text: "Kathmandu is the spiritual heart of Nepal, a city where ancient temples and modern life blend seamlessly. With 7 UNESCO World Heritage Sites, it's a destination that every traveler should experience."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Ancient temples of Kathmandu"
        },
        {
          type: "text",
          text: "Pashupatinath Temple is one of the most sacred Hindu temples in the world. Situated on the banks of the Bagmati River, this 5-level pagoda style temple attracts thousands of pilgrims every day. The spiritual energy here is palpable."
        },
        {
          type: "text",
          text: "Boudhanath Stupa is one of the largest stupas in the world and a UNESCO World Heritage Site. The peaceful ambiance, the spinning prayer wheels, and the devoted pilgrims circling the stupa create a meditative atmosphere."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Boudhanath Stupa at sunset"
        },
        {
          type: "highlight",
          text: "Must-Visit Temples",
          items: [
            "Pashupatinath Temple - Most sacred Hindu temple",
            "Boudhanath Stupa - World's largest stupa",
            "Swayambhunath Temple - The Monkey Temple",
            "Kathmandu Durbar Square - Ancient royal palace",
            "Taleju Temple - Tallest temple in Kathmandu",
            "Kali Temple - Goddess temple in Durbar Square"
          ]
        }
      ],
      tips: [
        "Dress respectfully when visiting temples",
        "Remove shoes before entering temples",
        "Best visited during morning hours",
        "Join evening prayers for authentic experience",
        "Hire a local guide for better insights",
        "Visit during Dasain festival for celebrations",
        "Photography may be restricted in some areas"
      ]
    },
    3: {
      title: "Wildlife Safari in Chitwan National Park",
      subtitle: "Adventures Among Nepal's Wildlife",
      author: "David Roberts",
      date: "December 5, 2024",
      readTime: "7 min",
      imageMain: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "Adventure & Wildlife",
      likes: 2650,
      views: 14200,
      content: [
        {
          type: "text",
          text: "Chitwan National Park is Nepal's premier wildlife destination. Spread over 932 square kilometers, this UNESCO World Heritage Site is home to one-horned rhinos, Bengal tigers, and over 450 bird species."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Jungle safari in Chitwan"
        },
        {
          type: "text",
          text: "Our 3-day safari included jungle walks, canoe rides on the Rapti River, and elephant-back safaris. Each experience offered unique opportunities to see wildlife in their natural habitat."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "One-horned rhinoceros in Chitwan"
        },
        {
          type: "highlight",
          text: "Wildlife You Can See",
          items: [
            "One-horned Rhinos - Over 700 in the park",
            "Bengal Tigers - Elusive but occasionally spotted",
            "Asian Elephants - Gentle giants of the jungle",
            "Gharials - Endangered crocodilians",
            "Deer species - Spotted and Hog Deer",
            "Over 450 bird species including eagles"
          ]
        }
      ],
      tips: [
        "Best season: November to March",
        "Hire experienced guides for safety",
        "Early morning safaris are most productive",
        "Bring binoculars and camera with good lens",
        "Wear neutral colored clothing",
        "Be patient - wildlife viewing requires time",
        "Follow all park safety guidelines strictly"
      ]
    }
  };

  const story = storiesData[id] || storiesData[1];

  return (
    <div className="story-detail-page">
      {/* Header */}
      <header className="story-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </header>

      {/* Main Content */}
      <article className="story-article">
        {/* Hero Section */}
        <div className="story-hero">
          <img src={story.imageMain} alt={story.title} className="hero-image" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="story-category">{story.category}</span>
            <h1 className="story-main-title">{story.title}</h1>
            <p className="story-main-subtitle">{story.subtitle}</p>
          </div>
        </div>

        <div className="story-container">
          {/* Sidebar */}
          <aside className="story-sidebar">
            <div className="author-card">
              <h4>By {story.author}</h4>
              <p className="story-date">{story.date}</p>
              <p className="read-time">📖 {story.readTime} read</p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-value">{story.views.toLocaleString()}</span>
                  <span className="stat-label">Views</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{story.likes.toLocaleString()}</span>
                  <span className="stat-label">Likes</span>
                </div>
              </div>
              <button 
                className={`like-btn ${isLiked ? 'liked' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                {isLiked ? '❤️ Liked' : '🤍 Like This Story'}
              </button>
            </div>

            {story.tips && (
              <div className="tips-card">
                <h4>📌 Travel Tips</h4>
                <ul className="tips-list">
                  {story.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          {/* Main Article Content */}
          <main className="story-main-content">
            {story.content.map((block, idx) => (
              <div key={idx}>
                {block.type === 'text' && (
                  <p className="story-paragraph">{block.text}</p>
                )}
                {block.type === 'image' && (
                  <figure className="story-figure">
                    <img src={block.url} alt={block.caption} className="story-body-image" />
                    <figcaption>{block.caption}</figcaption>
                  </figure>
                )}
                {block.type === 'highlight' && (
                  <div className="highlight-section">
                    <h3 className="highlight-title">{block.text}</h3>
                    <ul className="highlight-list">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </main>
        </div>
      </article>

      {/* Call to Action */}
      <section className="story-cta">
        <div className="cta-content">
          <h2>Ready to Share Your Story?</h2>
          <p>Join thousands of travelers documenting their journeys on Travel Diaries Nepal</p>
          <button className="cta-btn" onClick={() => navigate('/create')}>
            Start Writing Your Diary
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturedStoryDetail;
