import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

interface ButtonPropTypes extends HTMLAttributes<HTMLButtonElement>{
    invertColors?: boolean,
}

export default 
function Button({invertColors=false,children}:ButtonPropTypes) {

    const btnClasses = classNames({
        "font-bold": true,
        "p-1":true,
        "bg-primary": !invertColors,
        "text-gray-light": !invertColors,
        "bg-gray-dark": invertColors,
        "text-primary": invertColors
    })
    
  return (
    <button className={btnClasses}>
        {children}
    </button>
  )
}

export function SecondaryButton<T extends HTMLAttributes<HTMLButtonElement>>({children}:T) {

    
  return (
    <button className="font-bold p-1 bg-secondary text-gray-light">
        {children}
    </button>
  )
}
