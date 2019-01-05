import React from 'react';
import jQuery from 'jquery';
import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: left;
  padding: 1em;
  background: #3a5c83;
  color: white;
`;

export default class CountryInfo extends React.Component {
  render () {
    return (
      <Wrapper>
      <div className='container-child' style= {{
        marginLeft: '25px'
      }}>
        <h3 style= {{
          textAlign: 'center',
          marginBottom: '25px'
        }}>Country Info</h3>
        <ul className= "countryInfo" style={{
          listStyleType: 'none'
        }}>
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
