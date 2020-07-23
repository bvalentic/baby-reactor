import React from 'react';
import { SprkButton } from '@sparkdesignsystem/spark-react';
import './Button.scss'

export default function Button(props) {
    const handleClick = () => alert("Welcome to Baby Reactor! You did it!")
    return (
        <SprkButton element="button" variant="secondary" onClick={handleClick}>
            {props.title}
        </SprkButton>
    )
}
