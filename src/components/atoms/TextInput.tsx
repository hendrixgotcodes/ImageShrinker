import React from 'react'

export default function TextInput({label, placeholder}:{label:string, placeholder:string}) {
  return (
    <label htmlFor={label} className="w-full h-full flex flex-col">
        <span className="text-primary mb-1 text-sm">{label}</span>
        <input type="text" name={label} placeholder={placeholder} className="w-full border-1 border-primary px-2 py-4" />
    </label>
  )
}
