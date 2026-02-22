import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuideCard.css";

const GuideCard = ({ guide }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/guides/${guide._id}`);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`full-${i}`} className="star star--full">
                    ★
                </span>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half" className="star star--half">
                    ★
                </span>
            );
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={`empty-${i}`} className="star star--empty">
                    ★
                </span>
            );
        }

        return stars;
    };

    return (
        <div className="guide-card" onClick={handleClick}>
            <div className="guide-card__header">
                <div className="guide-card__image-wrap">
                    <img
                        src={guide.photo}
                        alt={guide.name}
                        className="guide-card__image"
                    />
                    {guide.featured && (
                        <span className="guide-card__featured-badge">⭐ Featured</span>
                    )}
                </div>
                <div className="guide-card__availability-badge" data-status={guide.availability}>
                    {guide.availability === "Available" && "✓ Available"}
                    {guide.availability === "Booked" && "✗ Booked"}
                    {guide.availability === "Limited Availability" && "⚠ Limited"}
                </div>
            </div>

            <div className="guide-card__body">
                <h3 className="guide-card__name">{guide.name}</h3>

                <div className="guide-card__rating">
                    <div className="guide-card__stars">{renderStars(guide.averageRating)}</div>
                    <span className="guide-card__rating-text">
                        {guide.averageRating.toFixed(1)} ({guide.totalReviews} reviews)
                    </span>
                </div>

                <p className="guide-card__bio">{guide.bio}</p>

                <div className="guide-card__info">
                    <div className="guide-card__info-item">
                        <span className="guide-card__info-icon">💼</span>
                        <span className="guide-card__info-text">
                            {guide.experienceYears} years experience
                        </span>
                    </div>

                    <div className="guide-card__info-item">
                        <span className="guide-card__info-icon">🗣️</span>
                        <span className="guide-card__info-text">
                            {guide.languages.slice(0, 2).join(", ")}
                            {guide.languages.length > 2 && ` +${guide.languages.length - 2}`}
                        </span>
                    </div>
                </div>

                <div className="guide-card__specialties">
                    {guide.specialties.slice(0, 3).map((specialty, index) => (
                        <span key={index} className="guide-card__specialty-tag">
                            {specialty}
                        </span>
                    ))}
                    {guide.specialties.length > 3 && (
                        <span className="guide-card__specialty-tag guide-card__specialty-tag--more">
                            +{guide.specialties.length - 3}
                        </span>
                    )}
                </div>

                <div className="guide-card__footer">
                    <div className="guide-card__price">
                        <span className="guide-card__price-label">From</span>
                        <span className="guide-card__price-amount">
                            NPR {guide.pricing.dailyRate.toLocaleString()}
                        </span>
                        <span className="guide-card__price-period">/day</span>
                    </div>
                    <button className="guide-card__btn">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default GuideCard;
