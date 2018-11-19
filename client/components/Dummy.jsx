import React from 'react';
import jQuery from 'jquery';
import DummyChild from './DummyChild';

export default class Dummy extends React.Component {
  constructor() {
    super();
    this.state = {
      dataFromBackEnd: {}
    };
    jQuery.get('http://localhost:3000/').then((data) => {
      this.setState({
        dataFromBackEnd: data
      });
    });
  }
  render () {
    return (
      <div className='container greeting'>
        <h1>{this.state.dataFromBackEnd.greeting}</h1>
        <DummyChild/>
      </div>
    );
  }
};
