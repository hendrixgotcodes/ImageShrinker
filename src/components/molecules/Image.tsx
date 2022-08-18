import gsap from 'gsap'
import React, { MutableRefObject, useEffect, useRef } from 'react'
import { CloseIcon } from '../atoms'

export default function Image({img, onDelete}:{img: File, onDelete?: (img:File, target:MutableRefObject<HTMLDivElement>)=>void}) {

  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
    <div ref={containerRef} className='flex flex-col items-center justify-center text-xs w-28'>
      <div className='w-30 h-24 rounded-lg flex justify-center items-center relative overflow-hidden'>
          <img 
            src="" 
            alt={img.name}
            className="w-full h-full object-cover" 
            ref={imgRef}
          />
          <div onClick={()=>onDelete(img, containerRef)} className="w-full h-full absolute top-0 left-0 bg-black/60 flex justify-center items-center transition-all duration-300 cursor-pointer opacity-0 hover:opacity-100">
            <div className="w-12 h-12">
              <CloseIcon />
            </div>
          </div>
      </div>
      <label className='text-gray-dark mt-3 break-all'>
        {img.name}
      </label>
    </div>
  )
}

function ImageSkeleton(){

  useEffect(()=>{
    gsap.to(".img-skeleton",{
      opacity:0.6,
      duration: 0.5,
      yoyo: true,
      repeat: -1
    })

  },[])

  return(
    <div
      className='img-skeleton flex flex-col items-center justify-center text-xs w-28'
      id=''
    >
        <div className='w-30 h-24 bg-gray-darker rounded-lg'/>
        <div className="w-30 h-3 rounded-lg mt-3 bg-gray-darker"/>

    </div>
  )
  
}