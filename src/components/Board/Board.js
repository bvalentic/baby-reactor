import React from 'react';

import Tile from '../Tile/Tile';
import './Board.scss';

export default function Board(props) {
    const boardSize = props.boardSize;
    const numShips = props.numShips;

    const tiles = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]

    const generateBoard = () => {
        for (let i in tiles) {
            for (let j in tiles[i]) {
                tiles[i][j] = i + j;
            }
        }
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

    const fillBoard = () => {
        let count = 0;
        while (count < numShips) {
            let x = Math.floor((Math.random() * 10) + 1);
            let y = Math.floor((Math.random() * 10) + 1);
            console.log("X & Y:" + x, y);
            const choice = tiles[x][y];
            console.log(choice);
            count += 1;
        }
    }

    return generateBoard();
    
}