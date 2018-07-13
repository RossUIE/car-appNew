import React, { Component } from 'react'
import './ChangeColor.css';
const ChangeColor = (props) => {
    return (
        <button onClick={props.onClick}>Change Background Color</button>
    )
}

export default ChangeColor;