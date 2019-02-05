import React from 'react';
import jQuery from 'jquery';
import styled from 'styled-components';

import Header from './components/header/Header';
import Greeting from './components/Greeting';
import CountryInfo from './components/CountryInfo';
import News from './components/News';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      greetingData: '',
      countryData: {},
      geoInfo: {}
    };
    jQuery.get('http://' + location.hostname + ':3000/countries').then((data) => {
      this.setState({
        greetingData: data.result[0].greeting,
        countryData: data.result[0].countryInfo,
        geoInfo: data.geo
      });
    });
  }
  render() {
    return (
      <div>
        <Header geoData={this.state.geoInfo}/>
        <Greeting greeting={this.state.greetingData}/>
        <CountryInfo countryInfo={this.state.countryData}/>
        <News />
      </div>
    )
  }
}
