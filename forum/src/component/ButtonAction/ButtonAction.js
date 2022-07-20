import React from 'react';
import './ButtonAction.scss';

function ButtonAction(props) {
  return <button className='button-action' onClick={props.onClick}>{props.txt}</button>;
}

export default ButtonAction;
