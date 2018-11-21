import React from 'react';
import jQuery from 'jquery';
import DummyChild from './DummyChild';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default class Dummy extends React.Component {
  constructor() {
    super();
    this.state = {
      dataFromBackEnd: {},
      countryData: {}
    };
    jQuery.get('http://localhost:3000/').then((data) => {
      this.setState({
        dataFromBackEnd: data,
        countryData: data.countryInfo
      });
    });
  }
  render () {
    return (
      <Wrapper>
        <div className='container greeting'>
          <Title>
            <h1>{this.state.dataFromBackEnd.greeting}</h1>
          </Title>
          <DummyChild countryInfo={this.state.countryData}/>
        </div>
      </Wrapper>
    );
  }
};
