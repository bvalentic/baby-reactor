import React from 'react';

import Tile from '../Tile/Tile';
import './Board.scss';

export default function Board(props) {
    const boardLength = props.boardLength;
    const boardHeight = props.boardHeight;
    const numMines = props.numMines;

    const tiles = [...Array(boardHeight)].map(e => Array(boardLength));

    const mine = 'X';

    for (var i=0; i < tiles.length; i++) {
        for(var j=0; j < tiles[i].length; j++) {
            tiles[i][j] = 0;
        }
    }

    const handleOnClick = (tile) => {
        tile.setState({
            displayValue: tile.state.realValue,
            revealed: true
        })
        console.log(tile.key);
        if (tile.state.realValue === 'X') {
            alert("Game Over!");
            revealBoard();
        }
    }

    const markMines = () => {
        // randomly selects tiles to be marked
        let count = 0;
        while (count < numMines) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            console.log("X & Y:" + x, y);
            tiles[x][y] = mine;
            count += 1;
        }
    }

    const giveMineCount = () => {
        // have tile display number of marked tiles in surrounding area
        for (var i=0; i < tiles.length; i++) {
            for(var j=0; j < tiles[i].length; j++) {
                if (i === 4 && j === 4) {
                    console.log(i,j)
                }
                checkMines(i, j);
            }
        }
    }

    const checkMines = (i, j) => {
        // if tile is a mine, leave as is
        if (tiles[i][j] === mine) return

        // check each adjacent tile, add +1 for each adjacent mine
        let mineCount = 0;

        // block of checks
        if (i > 0) {
            if (j > 0) {
                if (tiles[i-1][j-1] === mine) {mineCount++}
            }
            if (tiles[i-1][j] === mine) {mineCount++}
            if (j < 9) {
                if (tiles[i-1][j+1] === mine) {mineCount++}
            }
        }
        if (j > 0) {
            if (tiles[i][j-1] === mine) {mineCount++}
        }
        if (j < 9) {
            if (tiles[i][j+1] === mine) {mineCount++}
        }
        if (i < 9) {
            if (j < 9) {
                if (tiles[i+1][j-1] === mine) {mineCount++}
            }
            if (tiles[i+1][j] === mine) {mineCount++}
            if (j < 9) {
                if (tiles[i+1][j+1] === mine) {mineCount++}
            }
        }

        // tile value is now # of adjacent mines
        tiles[i][j] = mineCount;
    }

    const revealBoard = () => {
        // show all tile values on the board
        
    }

    const generateBoard = () => {
        // adds a number of 'X's on the board equal to numMines
        markMines();
        giveMineCount();

        let rows = tiles.map(function (item, i){
            let entry = item.map(function (element, j) {
                return ( 
                    <td className="board-tile" key={j}> 
                        <Tile value={tiles[i][j]} onClick={handleOnClick} revealed={false} key={tiles[i][j]}>
                            {tiles[i][j]}
                        </Tile>
                    </td>
                );
            });
            return (
                <tr key={i}>{entry}</tr>
            );
        });
        return(
            <div className="board-default">
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }

    return generateBoard();
}