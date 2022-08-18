import React, { HTMLAttributes, memo } from 'react'
import classNames from 'classnames'

interface ButtonPropTypes extends HTMLAttributes<HTMLButtonElement>{
    invertColors?: boolean,
    disabled?:boolean
}

interface SecondaryBtnPropTypes extends HTMLAttributes<HTMLButtonElement>{
  disabled?:boolean
}

function Button({invertColors=false,children, disabled=false,...rest}:ButtonPropTypes) {

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
    <button 
      className={btnClasses} 
      {...rest}
      disabled={disabled}
    >
        {children}
    </button>
  )
}

function SecondaryBtn({children, className, disabled=false,...rest}:SecondaryBtnPropTypes) {

  return (
    <button 
      {...rest}
      className={"p-1.5 bg-secondary text-gray-light " + className}
      disabled={disabled}
    >
        {children}
    </button>
  )
}

export const SecondaryButton = memo(SecondaryBtn)
export default memo(Button)
