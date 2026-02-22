import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { destinationsData } from '../../data/destinations';
import './ExplorePage.css';

const ExplorePage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    const destinations = Object.values(destinationsData);

    const filteredDestinations = destinations.filter(dest => {
        const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dest.location.toLowerCase().includes(searchTerm.toLowerCase());

        // Simple mock filter for types if we had them in data, for now just search
        return matchesSearch;
    });

    const handleDestinationClick = (slug) => {
        navigate(`/destination/${slug}`);
    };

    return (
        <div className="explore-page">
            <Header />

            <div className="explore-hero">
                <div className="container">
                    <h1 className="explore-title">Explore Nepal</h1>
                    <p className="explore-subtitle">Discover hidden gems, popular treks, and cultural wonders.</p>

                    <div className="explore-search-container">
                        <input
                            type="text"
                            className="explore-search"
                            placeholder="Where do you want to go?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="container explore-content">
                <div className="explore-grid">
                    {filteredDestinations.map((dest) => (
                        <div key={dest.id} className="explore-card" onClick={() => handleDestinationClick(dest.slug)}>
                            <div className="explore-card__image-wrap">
                                <img src={dest.image} alt={dest.name} className="explore-card__image" />
                                <div className="explore-card__overlay">
                                    <span className="explore-card__btn">View Details</span>
                                </div>
                            </div>
                            <div className="explore-card__body">
                                <h3 className="explore-card__title">{dest.name}</h3>
                                <p className="explore-card__location">{dest.location}</p>
                                <div className="explore-card__meta">
                                    <span className="explore-card__rating">★ 4.8</span>
                                    <span className="explore-card__price">From ${dest.pricePerPerson || 100}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ExplorePage;
