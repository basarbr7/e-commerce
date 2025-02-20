import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({classLink, className, src}) => {
  return (
    <Link className={`${classLink}`}>
        <picture>
            <img className={`${className}`} src={src} alt="image" />
        </picture>
    </Link>
  )
}

export default Image