import React from 'react';
import styled from 'styled-components';
import {WEATHER_API} from '../config/keys'

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherDescription: '',
      temp: 0,
      wind: 0
    };
  };

  componentDidMount() {
    const City = 'los angeles';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=${WEATHER_API}`)
      .then(response => response.json())
      .then(data => this.setState({
        weatherDescription: data.weather[0].description,
        temp: data.main.temp,
        wind: data.wind.speed
      }));
  }

  render() {
    const {temp, weatherDescription, wind} = this.state;
    return(
      <div style={{backgroundColor: 'white', margin: '10px'}}>
        <h3>{temp}℉</h3>
        <h5>{weatherDescription}</h5>
        <h5>Wind Speed: {wind}</h5>
      </div>
    )
  }
}
