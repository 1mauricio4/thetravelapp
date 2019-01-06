import React from 'react';
import styled from 'styled-components';

export default class Currency extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyRate: 0
    };
  };

  componentDidMount() {
    let countriesExchanged = 'USD_KRW';
    fetch('http://free.currencyconverterapi.com/api/v5/convert?q=USD_KRW&compact=y')
      .then(response => response.json())
      .then(data => this.setState({
        currencyRate: Number(data[countriesExchanged].val).toFixed(2)
      }));
  };

  render() {
    const {currencyRate} = this.state;
    return(
      <div style={{backgroundColor: 'white', margin: '10px', padding:'5px', borderRadius: '25px', textAlign: 'center'}}>
        <h3>USD_KRW</h3>
        <h5>₩ {currencyRate}</h5>
      </div>
    );
  };
};
