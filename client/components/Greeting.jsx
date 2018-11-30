import React from 'react';
import jQuery from 'jquery';
import styled from 'styled-components';
import CountryInfo from './CountryInfo';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default class Greeting extends React.Component {
  constructor() {
    super();
    this.state = {
      greetingData: '',
      countryData: {}
    };
    jQuery.get('http://localhost:3000/countries/USA').then((data) => {
      this.setState({
        greetingData: data[0].greeting,
        countryData: data[0].countryInfo
      });
    });
  }
  render () {
    return (
      <Wrapper>
        <div className='container greeting'>
          <Title>
            {this.state.greetingData}
          </Title>
          <CountryInfo countryInfo={this.state.countryData}/>
        </div>
      </Wrapper>
    );
  }
};
