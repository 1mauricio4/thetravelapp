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
  render () {
    return (
      <Wrapper>
        <div className='container greeting'>
          <Title>
            {this.props.greeting}
          </Title>
        </div>
      </Wrapper>
    );
  }
};
