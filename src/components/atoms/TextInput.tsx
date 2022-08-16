import { Property } from 'csstype'
import React, { memo } from 'react'

function TextInput({label, placeholder, bgColor}:{label:string, placeholder:string, bgColor?: Property.BackgroundColor}) {
  return (
    <label htmlFor={label} className="w-full h-full flex flex-col">
        <span className="text-primary mb-1 text-sm">{label}</span>
        <input 
          type="text" 
          name={label} 
          placeholder={placeholder} 
          className="w-full border-1 border-primary p-2" 
          style={{
            backgroundColor: bgColor
          }}
        />
    </label>
  )
}

export default memo(TextInput)

