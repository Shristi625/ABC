import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const MapWeatherSection = ({ location, coordinates, weather: initialWeather }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [userPos, setUserPos] = useState(null);
  const [weather, setWeather] = useState(initialWeather || null);

  useEffect(() => {
    // initialize map
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, { zoomControl: true, attributionControl: false }).setView([
        coordinates.lat,
        coordinates.lng,
      ], 10);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // destination marker
      L.marker([coordinates.lat, coordinates.lng]).addTo(mapRef.current).bindPopup(location.name);
    }

    // Request user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setUserPos({ lat, lng });

          try {
            // Add user marker
            const map = mapRef.current;
            const userMarker = L.marker([lat, lng], { title: "Your location" }).addTo(map);
            userMarker.bindPopup("You are here").openPopup();

            // Add routing control (OSRM public service)
            if (L.Routing) {
              L.Routing.control({
                waypoints: [L.latLng(lat, lng), L.latLng(coordinates.lat, coordinates.lng)],
                routeWhileDragging: false,
                showAlternatives: false,
                fitSelectedRoute: true,
                lineOptions: { styles: [{ color: "#4a47a3", weight: 5 }] },
                createMarker: function(i, wp, nWps) {
                  if (i === 0) return L.marker(wp.latLng, { icon: L.icon({ iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] }) }).bindPopup('You');
                  if (i === nWps - 1) return L.marker(wp.latLng).bindPopup(location.name);
                },
                router: L.Routing.osrmv1({ serviceUrl: "https://router.project-osrm.org/route/v1" }),
              }).addTo(map);
            }
          } catch (e) {
            console.warn("Routing init failed", e);
          }
        },
        (err) => {
          console.warn("Geolocation error:", err.message);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates.lat, coordinates.lng]);

  useEffect(() => {
    // Fetch live weather using Open-Meteo (no API key) for the destination coordinates
    const fetchWeather = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&current_weather=true&hourly=temperature_2m,relativehumidity_2m&windspeed_unit=kmh&timezone=auto`;
        const res = await fetch(url);
        const data = await res.json();
        if (data?.current_weather) {
          const cw = data.current_weather;
          // Build simple weather object compatible with UI
          const live = {
            temp: Math.round(cw.temperature),
            feelsLike: Math.round(cw.temperature),
            condition: cw.weathercode === 0 ? "Clear" : "Cloudy",
            humidity: data.hourly?.relativehumidity_2m ? Math.round(data.hourly.relativehumidity_2m[0]) : (initialWeather?.humidity || 0),
            windSpeed: Math.round(cw.windspeed),
            uvIndex: initialWeather?.uvIndex || "—",
            icon: cw.weathercode === 0 ? "☀️" : "🌤️",
            forecast: initialWeather?.forecast || [],
          };
          setWeather(live);
        }
      } catch (e) {
        console.warn("Weather fetch failed", e);
      }
    };

    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates.lat, coordinates.lng]);

  return (
    <>
      <section className="map-weather-section">
        <div className="map-container" style={{ minHeight: 400 }}>
          <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="weather-container">
          <div className="weather-header">
            <p className="weather-title">Weather Today</p>
            <h3 className="weather-location">{location.name}</h3>
          </div>

          <div className="weather-main">
            <div className="weather-temp-section">
              <p className="weather-temp">{weather?.temp ?? "—"}°C</p>
              <p className="weather-condition">{weather?.condition ?? "—"}</p>
            </div>
            <div className="weather-icon">{weather?.icon ?? "—"}</div>
          </div>

          <div className="weather-details">
            <div className="weather-detail-item">
              <p className="weather-detail-label">Feels Like</p>
              <p className="weather-detail-value">{weather?.feelsLike ?? "—"}°C</p>
            </div>
            <div className="weather-detail-item">
              <p className="weather-detail-label">Humidity</p>
              <p className="weather-detail-value">{weather?.humidity ?? "—"}%</p>
            </div>
            <div className="weather-detail-item">
              <p className="weather-detail-label">Wind Speed</p>
              <p className="weather-detail-value">{weather?.windSpeed ?? "—"} km/h</p>
            </div>
            <div className="weather-detail-item">
              <p className="weather-detail-label">UV Index</p>
              <p className="weather-detail-value">{weather?.uvIndex ?? "—"}</p>
            </div>
          </div>

          <div className="weather-forecast">
            <p className="forecast-title">Forecast</p>
            <div className="forecast-items">
              {weather?.forecast?.map((day, index) => (
                <div key={index} className="forecast-item">
                  <div className="forecast-day">{day.day}</div>
                  <div className="forecast-icon">{day.icon}</div>
                  <div className="forecast-temp">{day.high}° / {day.low}°</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="location-info-card">
        <h3 className="location-info-title">📍 Location Information</h3>
        <div className="location-details">
          <div className="location-detail">
            <p className="location-detail-label">Place</p>
            <p className="location-detail-value">{location.name}</p>
          </div>
          <div className="location-detail">
            <p className="location-detail-label">District</p>
            <p className="location-detail-value">{location.district}</p>
          </div>
          <div className="location-detail">
            <p className="location-detail-label">Elevation</p>
            <p className="location-detail-value">{location.elevation}m above sea level</p>
          </div>
          <div className="location-detail">
            <p className="location-detail-label">Best Time to Visit</p>
            <p className="location-detail-value">{location.bestTime}</p>
          </div>
          <div className="location-detail">
            <p className="location-detail-label">Distance from Kathmandu</p>
            <p className="location-detail-value">{location.distance}</p>
          </div>
          <div className="location-detail">
            <p className="location-detail-label">Temperature Range</p>
            <p className="location-detail-value">{location.tempRange}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapWeatherSection;
