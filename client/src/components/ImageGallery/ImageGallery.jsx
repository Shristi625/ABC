import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images = [], title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images?.length) return null;

  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="image-gallery">
      {title && <h2 className="image-gallery__title">{title}</h2>}
      <div className="image-gallery__carousel">
        <button
          className="image-gallery__nav image-gallery__nav--prev"
          onClick={prev}
          aria-label="Previous image"
        >
          ‹
        </button>
        <div className="image-gallery__slide">
          <img
            src={images[activeIndex]}
            alt={`Gallery ${activeIndex + 1}`}
            className="image-gallery__img"
          />
        </div>
        <button
          className="image-gallery__nav image-gallery__nav--next"
          onClick={next}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
      <div className="image-gallery__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`image-gallery__dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
