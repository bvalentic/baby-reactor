import React from 'react';

import Tile from '../Tile/Tile';
import './Board.scss';

export default function Board(props) {
    const boardLength = props.boardLength;
    const numShips = props.numShips;

    const tiles = [...Array(boardLength)].map(e => Array(boardLength));


    for (var i=0; i < tiles.length; i++) {
        for(var j=0; j < tiles[i].length; j++) {
            tiles[i][j] = i.toString() + j.toString();
        }
    }

    const fillBoard = () => {
        // randomly selects tiles to be marked
        let count = 0;
        while (count < numShips) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            console.log("X & Y:" + x, y);
            const choice = tiles[x][y];
            console.log(choice);
            tiles[x][y] = 'X';
            count += 1;
        }
    }

    const generateBoard = () => {
        // adds a number of 'X's on the board equal to numShips
        fillBoard();

        let rows = tiles.map(function (item, i){
            let entry = item.map(function (element, j) {
                return ( 
                    <td className="board-tile" key={j}> 
                        <Tile value={tiles[i][j]}>
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