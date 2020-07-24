import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './Landing.scss';
import logo from '../../images/nuclear-symbol.png';
import Button from '../Button/Button';
import { SprkButton } from '@sparkdesignsystem/spark-react';

export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <>
            <div className="App-body">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className="title">
                    Baby Reactor
                </h3>
                <div className="buttons">
                    <Link to="/high-scores">
                        <SprkButton variant="secondary">High Scores</SprkButton>
                    </Link>
                    <Button title={"Hello!"}/>
                    <Link to="/play">
                        <SprkButton>Play</SprkButton>
                    </Link>
                </div>
            </div>
            </>
        )
    }
}