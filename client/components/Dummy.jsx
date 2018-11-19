import React from 'react';
import DummyChild from './DummyChild';

export default class Dummy extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1> Getting Started</h1>
        <DummyChild/>
      </div>
    );
  }
};
