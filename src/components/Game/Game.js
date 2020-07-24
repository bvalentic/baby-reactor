import React, { Component } from 'react';

import Board from '../Board/Board';

import './Game.scss';

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardLength: 10,
            boardHeight: 10,
            numMines: 10
        };
    }

    newBoard() {
        return (
            <>
                <div>It's game time!</div>
                <Board  className="board-default" 
                        boardLength={this.state.boardLength} 
                        boardHeight={this.state.boardHeight}
                        numMines={this.state.numMines}>
                </Board>
            </>
        )
    }

    render() {
        return this.newBoard();
    }
}