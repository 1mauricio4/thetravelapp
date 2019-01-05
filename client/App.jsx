import React from 'react';
import jQuery from 'jquery';
import styled from 'styled-components';

import Header from './components/Header';
import Greeting from './components/Greeting';
import CountryInfo from './components/CountryInfo';
import News from './components/News';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      greetingData: '',
      countryData: {}
    };
    jQuery.get('http://' + location.hostname + ':3000/countries/USA').then((data) => {
      this.setState({
        greetingData: data[0].greeting,
        countryData: data[0].countryInfo
      });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Greeting greeting={this.state.greetingData}/>
        <CountryInfo countryInfo={this.state.countryData}/>
        <News />
      </div>
    )
  }
}
