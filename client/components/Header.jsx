import React from 'react';
import styled from 'styled-components';

import Weather from './Weather';
import Currency from './Currency';

const Wrapper = styled.section`
  display: flex;
  background-color: #a3cef1;
  width: 100%;
  height: auto;
  justify-content: center;
`;


export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>
          <Weather />
          <Currency />
      </Wrapper>
    );
  };
};
