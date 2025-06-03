import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({className, src, alt = "image"}) => {
  return (
        <picture>
            <img className={`${className}`} src={src} alt={alt} />
        </picture>
  )
}

export default Image