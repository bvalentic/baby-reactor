import React from 'react';
import './Button.scss'

export default function Button(props) {
    const handleClick = () => alert("Welcome to Baby Reactor! You did it!")
    return (
        <button onClick={handleClick}>
            {props.title}
        </button>
    )
}
