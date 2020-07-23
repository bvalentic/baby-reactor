import React, { Component } from 'react';

import Board from '../Board/Board';

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardSize: 10,
            numShips: 5
        };
    }

    newBoard() {
        return
    }

    render() {
        return (
            <>
                <div>It's game time!</div>
                <Board className="board-default" boardSize={this.state.boardSize} numShips={this.state.numShips}>

                </Board>
            </>
        )
    }
}