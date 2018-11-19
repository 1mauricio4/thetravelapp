import React from 'react';
import jQuery from 'jquery';

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
      <div className='container-child'>
        <h1>I'm the child</h1>
        {this.state.dataFromBackEnd.countryName}
      </div>
    );
  }
}
