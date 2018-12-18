import React from 'react';
import jQuery from 'jquery';
import styled from 'styled-components';

import Greeting from './components/Greeting';
import CountryInfo from './components/CountryInfo';

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
        <Greeting greeting={this.state.greetingData}/>
        <CountryInfo countryInfo={this.state.countryData}/>
      </div>
    )
  }
}