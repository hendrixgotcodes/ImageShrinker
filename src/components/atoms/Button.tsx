import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

interface ButtonPropTypes extends HTMLAttributes<HTMLButtonElement>{
    invertColors?: boolean,
}

export default 
function Button({invertColors=false,children, ...rest}:ButtonPropTypes) {

    const btnClasses = classNames({
        "text-xs": true,
        // "font-bold": true,
        "p-1.5":true,
        "bg-primary": !invertColors,
        "text-gray-light": !invertColors,
        "bg-gray-200": invertColors,
        "text-primary": invertColors
    })
    
  return (
    <button className={btnClasses} {...rest}>
        {children}
    </button>
  )
}

export function SecondaryButton<T extends HTMLAttributes<HTMLButtonElement>>({children, className,...rest}:T) {

  return (
    <button 
      {...rest}
      className={"p-1.5 bg-secondary text-gray-light " + className}
    >
        {children}
    </button>
  )
}
