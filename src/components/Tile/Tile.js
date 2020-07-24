import React, { Component } from 'react';

import './Tile.scss';

export default class Tile extends Component{
    constructor(props) {
        super(props);

        this.state = {
            realValue: props.value,
            displayValue: '',
            revealed: props.revealed
        }

        if (this.state.revealed) {
            this.state.displayValue = this.state.realValue;
        }
    }

    reveal() {
        this.setState({
            displayValue: this.state.realValue,
            revealed: true
        })
    }

    // handleOnClick = () => {
    //     this.setState({
    //         revealed: true
    //     })
    //     if (this.state.realValue === 'X') {
    //         alert("Game Over!");
    //     }
    // }

    render() {
        return (
            <div className="tile-default" onClick={() => this.props.onClick(this)}>
                {this.state.displayValue}
            </div>
        )
    }
    
}