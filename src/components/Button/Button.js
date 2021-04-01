import React from 'react';

const Button = (props) => {
  return (
    <button 
      onClick={props.click}
      style={{ backgroundColor: props.backgroundColor }}
      className={props.classes ? props.classes.join(' ') : ''}
    >
      {props.text}
    </button>
  );
}

export default Button;
