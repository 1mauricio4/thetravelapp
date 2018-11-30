import React from 'react';
import jQuery from 'jquery';
import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  padding: 1em;
  background: pink;
`;

export default class CountryInfo extends React.Component {
  render () {
    return (
      <Wrapper>
      <div className='container-child'>
        <h4>Country Info</h4>
        <ul className= "countryInfo">
          <li><strong>Official Name:</strong> {this.props.countryInfo.countryName}</li>
          <li><strong>Population:</strong> {this.props.countryInfo.population}</li>
          <li><strong>Number of States/Provinces:</strong> {this.props.countryInfo.numberOfStates}</li>
          <li><strong>Capital:</strong> {this.props.countryInfo.capital}</li>
          <li><strong>President:</strong> {this.props.countryInfo.president}</li>
        </ul>
      </div>
      </Wrapper>
    );
  }
};
