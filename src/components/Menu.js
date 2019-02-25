import React, { Component } from 'react';
import '../styles/menu.scss';
import {scrollTo} from '../utils/scroll';

export default class Menu extends Component {
  _scroll = name => {
    let loc = document.querySelector(name).offsetTop
    scrollTo(loc, 0)
  }

  render() {
    return (
      <div className='menu'>
        <div className='left'>
            <span onClick={() => this._scroll('.app')}>IMD c/o 2019</span>
        </div>
        <div className='right'>
            <span>Capstones</span>
            <span onClick={() => this._scroll('.students')}>Students</span>
            <span onClick={() => this._scroll('.about')}>About</span>
        </div>
      </div>
    );
  }
}
