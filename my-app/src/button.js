import React, {useRef} from 'react'
import './App.css';

const colors = ['button_green', 'button_blue', 'button_orange', 'button_red', 'button_yellow'];

const Button = ({value, selectedTopics, colorIndex, handleClick }) => {

    const index = selectedTopics.indexOf(value) % 5;
    const className = selectedTopics.includes(value) ? colors[index] : 'button_default'

    return (
    <button className= {`${className} button`} onClick={() => handleClick(value)}> 
        {value} 
    </button>
    )
}

export default Button