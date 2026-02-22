import React, { useEffect, useState } from 'react';
import './WeatherWidget.css';

const WeatherWidget = ({ coordinates, locationName }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!coordinates?.lat || !coordinates?.lng) return;
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&current_weather=true&hourly=relativehumidity_2m&windspeed_unit=kmh&timezone=auto`;
        const res = await fetch(url);
        const data = await res.json();
        if (data?.current_weather) {
          const cw = data.current_weather;
          const codeToIcon = {
            0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
            45: '🌫️', 48: '🌫️', 51: '🌧️', 61: '🌧️',
            80: '🌦️', 95: '⛈️',
          };
          setWeather({
            temp: Math.round(cw.temperature),
            condition: cw.weathercode === 0 ? 'Clear' : cw.weathercode < 3 ? 'Partly Cloudy' : 'Cloudy',
            icon: codeToIcon[cw.weathercode] || '🌤️',
            windSpeed: Math.round(cw.windspeed),
            humidity: data.hourly?.relativehumidity_2m?.[0] ? Math.round(data.hourly.relativehumidity_2m[0]) : null,
          });
        }
      } catch (e) {
        console.warn('Weather fetch failed', e);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [coordinates?.lat, coordinates?.lng]);

  if (loading) {
    return (
      <div className="weather-widget weather-widget--loading">
        <div className="weather-widget__skeleton"></div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="weather-widget">
      <div className="weather-widget__header">
        <span className="weather-widget__label">Weather</span>
        <span className="weather-widget__location">{locationName}</span>
      </div>
      <div className="weather-widget__main">
        <div className="weather-widget__temp-section">
          <span className="weather-widget__icon">{weather.icon}</span>
          <div>
            <span className="weather-widget__temp">{weather.temp}°C</span>
            <span className="weather-widget__condition">{weather.condition}</span>
          </div>
        </div>
        {(weather.humidity || weather.windSpeed) && (
          <div className="weather-widget__details">
            {weather.humidity != null && (
              <span>Humidity {weather.humidity}%</span>
            )}
            {weather.windSpeed != null && (
              <span>Wind {weather.windSpeed} km/h</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
