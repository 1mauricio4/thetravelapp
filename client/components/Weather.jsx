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
    const city = 'los angeles';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${WEATHER_API}`)
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
      <div style={{backgroundColor: 'white', margin: '10px', padding:'5px', borderRadius: '25px', textAlign: 'center'}}>
        <h4 style={{margin:'10px'}}>{temp}℉</h4>
        <h6 style={{margin:'10px'}}>{weatherDescription}</h6>
        <h6 style={{margin:'10px'}}>Wind Speed: {wind}</h6>
      </div>
    );
  };
};
