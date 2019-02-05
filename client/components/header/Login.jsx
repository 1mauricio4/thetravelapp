import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#body');

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      username: '',
      password: ''
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  toggle() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
    console.log(this.state.modalIsOpen);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handelSubmit(e) {
    e.preventDefault();
    alert('you\'re logged in!')
    this.toggle();
  }

  render() {
    const {username, password} = this.state;
    return (
      <div style={{display: 'block', margin: '1.3rem'}}>
        <button style={{borderRadius: '25px', background: '#a3cef1'}} onClick={this.toggle}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
        >
          <h2>Login</h2>
          <form onSubmit={this.handelSubmit}>
            <input type='text' placeholder='username' name='username' value={username} onChange={this.handleChange} />
            <br/><br/>
            <input type='password' placeholder='password' name='password' value={password} onChange={this.handleChange}/>
            <br/><br/>
            <input type='submit' value='Submit'/>
            <br/><br/>
            <button onClick={this.toggle}>close</button>
          </form>
        </Modal>
      </div>
    );
  }
};
