import React from 'react';
import jQuery from 'jquery';

export default class Dummy extends React.Component {
  render () {
    return (
      <div className='container-child'>
        <h1>I'm the child</h1>
        {this.props.countryInfo}
      </div>
    );
  }
}
