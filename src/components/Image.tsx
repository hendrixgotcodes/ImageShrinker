import React, { useEffect, useRef } from 'react'

export default function Image({img}:{img: File}) {

  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(()=>{
    const imgComponent = imgRef?.current
    const fileReader = new FileReader()
    if(imgRef){
      fileReader.onload = ()=> imgComponent.src=fileReader.result as string
      fileReader.readAsDataURL(img)
    }

    return ()=>fileReader.onload = null
  },[])

  return (
    <div className='flex flex-col items-center justify-center text-xs w-28'>
      <div className='w-30 h-24 border border-gray-red rounded-lg flex justify-center items-center relative overflow-hidden'>
          <img 
            src="" 
            alt={img.name}
            className="w-full h-full object-cover" 
            ref={imgRef}
          />
      </div>
      <label className='text-gray-dark mt-3 break-all'>
        {img.name}
      </label>
    </div>
  )
}
