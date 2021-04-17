import React, { Component } from 'react';
import './style.scss'

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
   }
  render() {
    return (
      <div>
        <div className={'menuBtn'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}