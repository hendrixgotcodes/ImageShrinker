import React from 'react'

export default function ProgressBar({progress}:{progress:number}) {
    
  return (
    <div className='w-full h-full bg-gray-500'>
        <div className='h-full bg-primary' style={{width:`${progress}%`}} />
    </div>
  )
}
