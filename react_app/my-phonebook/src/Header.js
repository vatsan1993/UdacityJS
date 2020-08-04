import React from 'react';
import './Header.css';
// import React, { Component } from 'react';
// function component

const Header = function (props) {
  return <div className='header'>{props.heading}</div>;
};

// class component

// class Header extends Component {
//   render() {
//     return <div className='header'>{this.props.heading}</div>;
//   }
// }

export default Header;
