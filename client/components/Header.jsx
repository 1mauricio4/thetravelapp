import React from 'react';
import styled from 'styled-components';

import Weather from './Weather'

const Wrapper = styled.section`
  display: flex;
  background-color: #a3cef1;
  width: 100%;
  height: auto;
`;


export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>
          <Weather />
      </Wrapper>
    )
  }
}
