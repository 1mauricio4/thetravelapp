import React from 'react';
import styled from 'styled-components';

import Weather from './Weather';
import Currency from './Currency';
import Login from './Login';

const Wrapper = styled.section`
  display: flex;
  background-color: #a3cef1;
  width: 100%;
  height: auto;
  justify-content: center;
`;


export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      original: 'ORIGINAL!',
      geoData: {}
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.geoData !== prevState.geoData) {
      return {
        geoData: nextProps.geoData
      }
    }
    return null
  }

  render() {
    return (
      <Wrapper>
          <Weather city={this.state.geoData.city}/>
          <Currency />
          <div style={{backgroundColor: 'white', margin: '10px', padding:'5px', borderRadius: '25px', textAlign: 'center', width: '100px'}}>
            <Login />
            <button style={{display: 'block', margin: '1.3rem', borderRadius: '25px',background: '#a3cef1'}}>sign up</button>
          </div>
      </Wrapper>
    );
  };
};
