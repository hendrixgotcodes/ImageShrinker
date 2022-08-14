import React, { useEffect, useRef, useState } from 'react'
import Image from '../molecules/Image'
import ImagePicker from '../molecules/ImagePicker'
import {nanoid} from 'nanoid'

export default function ImageTray() {

    const [images, setImages] = useState<File[]>([])
    const imagePickerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>imagePickerRef?.current.scrollIntoView())

    function handleImagePickerOnChange(files: File[]){
        setImages([...images, ...files])
    }
    
  return (
    <div className='w-full flex overflow-x-auto justify-center items-start custom_scrollbar--hor'>
        {<div className='ml-2 mr-14'>
            <ImagePicker onChange={handleImagePickerOnChange} ref={imagePickerRef} />
        </div>
        }
        {
            images.map((image)=>(
                <div className="mr-14 last:mr-2">
                    <Image img={image} key={nanoid(5)} />
                </div>
            ))
        }
    </div>
  )
}
