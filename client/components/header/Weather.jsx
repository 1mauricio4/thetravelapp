import React from 'react';
import styled from 'styled-components';
import {WEATHER_API} from '../../config/keys'

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherDescription: '',
      temp: 0,
      wind: 0,
      city: ''
    };
  };

  componentDidUpdate(prevProps) {
    if(this.props.city !== prevProps.city){
      this.setState({
        city: this.props.city
      })
      this.fetchData(this.props.city)
    }
  }

  fetchData(city) {
    fetch(`http://localhost:3000/weather_api/${city}`)
      .then(response => response.json())
      .then(data => this.setState({
        weatherDescription: data.weather[0].description,
        temp: data.main.temp,
        wind: data.wind.speed
      }));
  }

  render() {
    const {temp, weatherDescription, wind, city} = this.state;
    return(
      <div style={{backgroundColor: 'white', margin: '10px', padding:'5px', borderRadius: '25px', textAlign: 'center', width: '100px'}}>
        <h4 style={{margin:'10px'}}>{temp}℉</h4>
        <h6 style={{margin:'10px'}}>{weatherDescription}</h6>
        <h6 style={{margin:'10px'}}>Wind Speed: {wind}</h6>
      </div>
    );
  };
};
