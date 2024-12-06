import React, {useRef} from 'react'
import { useHover } from 'usehooks-ts';
import './App.css';

const colors = ['button_green', 'button_blue', 'button_orange', 'button_red', 'button_yellow'];

const Button = ({value, selectedTopics, handleClick }) => {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    const index = selectedTopics.indexOf(value) % 5;  // using the index of topic in filtered topic for colours

    const className = selectedTopics.includes(value) ? colors[index] : 'button';

    return (
    <button className= {`${className} ${isHover ? 'hover' : ''}`} onClick={() => handleClick(value)}> 
        {value} 
    </button>
    )
}

export default Button