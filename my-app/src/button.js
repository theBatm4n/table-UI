import React from 'react'
import './App.css';

const Button = ({ value, isButtonSelected, handleClick }) => {
  return (
    <button className={isButtonSelected ? 'button_selected' : 'button'}
        onClick={handleClick}> 
        {value} 
    </button>
  )
}

export default Button