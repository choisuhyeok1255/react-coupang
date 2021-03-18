import React from 'react';
import { button, primaryNormal } from './Button.module.scss';

const Button = ({mode, state, children}) => {
  return (
    <button className={button}>{children}</button>
  )
}

export default Button;
