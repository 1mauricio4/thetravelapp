import React from 'react';
import jQuery from 'jquery';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #e7ecef;
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
  };
};
