import React, { Component } from 'react';
import '../styles/loader.scss';
import {ReactComponent as HOURGLASS} from '../assets/hourglass.svg'
export default class LoadScreen extends Component {
    state = {}
    render() {
        return (
            <div className="loader" style={{opacity: this.props.loaded ? 0 : 1}}>
                <HOURGLASS/>
                <h1>
                    <span>UWB IMD 2019 </span>
                {/* <div className="loader-line"/> */}
                </h1>
            </div>
        );
    }
}