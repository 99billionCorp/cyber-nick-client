import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default function SignBtn({
  label,
  href,
  bgc = '#000',
  type = 'button',
  onClick = () => {
    console.log('Click!');
  },
}) {
  const style = {
    backgroundColor: bgc,
  };
  return (
    <Link to={href} className="SignBtn" onClick={onClick}>
      <button className="btn" style={style} type={type}>
        {label}
      </button>
    </Link>
  );
}
