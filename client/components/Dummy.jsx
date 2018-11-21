import React from 'react';
import jQuery from 'jquery';
import styled from 'styled-components';
import DummyChild from './DummyChild';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default class Dummy extends React.Component {
  constructor() {
    super();
    this.state = {
      greetingData: {},
      countryData: {}
    };
    jQuery.get('http://localhost:3000/').then((data) => {
      this.setState({
        greetingData: data,
        countryData: data.countryInfo
      });
    });
  }
  render () {
    return (
      <Wrapper>
        <div className='container greeting'>
          <Title>
            {this.state.greetingData.greeting}
          </Title>
          <DummyChild countryInfo={this.state.countryData.countryName}/>
        </div>
      </Wrapper>
    );
  }
};
