import React from 'react';

import './Tile.scss';

export default function Tile(props) {
    let displayValue = '';

    const handleOnClick = () => {
        displayValue = props.value;
    }

    return (
        <div className="tile-default" onClick={handleOnClick}>
            {props.value}
        </div>
    )
}