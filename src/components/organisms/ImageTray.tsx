import React, { MutableRefObject, Ref, useEffect, useRef, useState } from 'react'
import { ImagePicker, Image } from '../molecules'
import {nanoid} from 'nanoid'
import gsap from 'gsap'

export default function ImageTray() {

    const [images, setImages] = useState<File[]>([])
    const imagePickerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>imagePickerRef?.current.scrollIntoView())

    function handleImagePickerOnChange(files: File[]){
        setImages([...images, ...files])
    }

    function handleOnImageDelete(file: File, target: MutableRefObject<HTMLDivElement>){
        gsap.to(target?.current, {
            duration: 0.3,
            y: 12,
            opacity: 0,
            ease: "power1"
        })
        .then(()=>{
            setImages(
                images.filter((img)=>img !== file)
            )
        })
    }
    
  return (
    <div className='w-full flex overflow-x-auto justify-center items-start custom_scrollbar--hor overflow-y-visible transition-all duration-300'>
        {<div className='ml-2 mr-14 overflow-visible'>
            <ImagePicker onChange={handleImagePickerOnChange} ref={imagePickerRef} />
        </div>
        }
        {
            images.map((image)=>(
                <div className="mr-14 last:mr-2 overflow-y-visible">
                    <Image onDelete={handleOnImageDelete} img={image} key={nanoid(5)} />
                </div>
            ))
        }
    </div>
  )
}
