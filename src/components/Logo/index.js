import React from 'react'
import {Link} from "react-router-dom";

export default function Logo({ path, height = '50px' }) {

  return (
    <Link to="/">
      <img className="logo" src={path}
        height={height}
        alt="Logo-white" />
    </Link>
  )
}
