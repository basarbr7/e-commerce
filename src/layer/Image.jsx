import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({classLink, className, src, to}) => {
  return (
    <Link to={to} className={`${classLink}`}>
        <picture>
            <img className={`${className}`} src={src} alt="image" />
        </picture>
    </Link>
  )
}

export default Image