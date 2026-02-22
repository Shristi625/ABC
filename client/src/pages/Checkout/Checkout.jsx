import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Checkout.css';
import { toUSD, toNPR } from '../../config/currency';
import { transportationOptions, hotelOptions } from '../../config/bookingOptions';

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const destinationName = state?.name || 'Unknown Destination';
  const basePrice = state?.price ?? 0;
  const image = state?.image;

  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const transportPrice = transportationOptions.find(t => t.id === selectedTransport)?.price ?? 0;
  const hotelPrice = hotelOptions.find(h => h.id === selectedHotel)?.price ?? 0;
  const totalPrice = basePrice + transportPrice + hotelPrice;

  const handleProceed = () => {
    // Placeholder for payment integration
    alert(`Proceeding to payment for ${destinationName}\nTotal: ${toUSD(totalPrice)} (${toNPR(totalPrice)})`);
  };

  return (
    <div className="checkout-page">
      <Header />
      <main className="container checkout-body">
        <section className="checkout-card">
          {image && <img src={image} alt={destinationName} className="checkout-image" />}
          <h1 className="checkout-title">{destinationName}</h1>

          {/* Destination Price */}
          <div className="checkout-section">
            <h3>Tour Price</h3>
            <p className="checkout-line-item">
              <span>{destinationName} (per person)</span>
              <span>{toUSD(basePrice)}</span>
            </p>
          </div>

          {/* Transportation Options */}
          <div className="checkout-section">
            <h3>Transportation (Optional)</h3>
            <div className="checkout-options">
              {transportationOptions.map(transport => (
                <label key={transport.id} className="option-label">
                  <input
                    type="radio"
                    name="transport"
                    value={transport.id}
                    checked={selectedTransport === transport.id}
                    onChange={(e) => setSelectedTransport(e.target.value)}
                  />
                  <span className="option-text">{transport.label}</span>
                  <span className="option-price">+{toUSD(transport.price)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Hotel Options */}
          <div className="checkout-section">
            <h3>Hotel Accommodation (Optional)</h3>
            <div className="checkout-options">
              {hotelOptions.map(hotel => (
                <label key={hotel.id} className="option-label">
                  <input
                    type="radio"
                    name="hotel"
                    value={hotel.id}
                    checked={selectedHotel === hotel.id}
                    onChange={(e) => setSelectedHotel(e.target.value)}
                  />
                  <span className="option-text">{hotel.label}</span>
                  <span className="option-price">+{toUSD(hotel.price)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Breakdown & Totals */}
          <div className="checkout-section checkout-totals">
            <h3>Order Summary</h3>
            <div className="checkout-line-item">
              <span>Tour</span>
              <span>{toUSD(basePrice)}</span>
            </div>
            {selectedTransport && (
              <div className="checkout-line-item">
                <span>{transportationOptions.find(t => t.id === selectedTransport)?.label}</span>
                <span>{toUSD(transportPrice)}</span>
              </div>
            )}
            {selectedHotel && (
              <div className="checkout-line-item">
                <span>{hotelOptions.find(h => h.id === selectedHotel)?.label}</span>
                <span>{toUSD(hotelPrice)}</span>
              </div>
            )}
            <div className="checkout-line-item checkout-total">
              <span>Total</span>
              <span>{toUSD(totalPrice)}</span>
            </div>
            <p style={{fontSize:'12px', color:'#666', margin:'8px 0 0 0'}}>
              Approx. {toNPR(totalPrice)}
            </p>
          </div>

          <button className="checkout-proceed" onClick={handleProceed}>
            Proceed to Payment
          </button>
          <button className="checkout-back" onClick={() => navigate(-1)}>
            Back
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
