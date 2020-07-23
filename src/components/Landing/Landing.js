import React, { Component } from 'react';

import './Landing.scss';
import logo from '../../images/nuclear-symbol.png';
import Button from '../Button/Button';

export default class Landing extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <>
                <img src={logo} className="App-logo" alt="logo" />
                <p className="title">
                    Baby Reactor
                </p>
                <div>
                    <Button title={"Hello!"}/>
                </div>
            </>
        )
    }
}