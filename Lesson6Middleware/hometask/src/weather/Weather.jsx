import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = props => {
  props.getWeatherData();
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {props.weatherData.map(weatherData => (
          <li key={weatherData.id} className="city">
            <span className="city__name">{weatherData.name}</span>
            <span className="city__temperature">{weatherData.temperature}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

// Weather.propTypes = {
//   weatherData: PropTypes.func.isRequired,
// };

const mapState = state => ({
  weatherData: weatherDataSelector(state),
});

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
