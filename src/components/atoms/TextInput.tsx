import { Property } from 'csstype'
import React, { HTMLAttributes, HTMLInputTypeAttribute, memo } from 'react'

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  label:string, 
  placeholder:string, 
  type?:HTMLInputTypeAttribute,
  bgColor?: Property.BackgroundColor,
  value?: number,
  autoFocus?: boolean
}

function TextInput({label, placeholder, bgColor, type, value, autoFocus,...rest}:TextInputProps) {
  return (
    <label htmlFor={label} className="w-full h-full flex flex-col">
        <span className="text-primary mb-1 text-sm">{label}</span>
        <input
          {...rest}
          type={type} 
          name={label} 
          placeholder={placeholder} 
          className="w-full border-1 border-primary p-2 text-primary rounded outline-none transition-all duration-300 focus:ring focus:ring-primary/30" 
          style={{
            backgroundColor: bgColor
          }}
          value={value}
          autoFocus={autoFocus}
        />
    </label>
  )
}

export default memo(TextInput)

