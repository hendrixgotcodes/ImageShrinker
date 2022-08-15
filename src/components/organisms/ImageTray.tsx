import gsap from 'gsap'
import { nanoid } from 'nanoid'
import React, { MutableRefObject, useContext, useEffect, useRef } from 'react'
import AppContext from '../../context/AppContext'
import { Image, ImagePicker } from '../molecules'

export default function ImageTray() {

    const {images, setImages} = useContext(AppContext)

    const imagePickerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>imagePickerRef?.current.scrollIntoView())

    function handleImagePickerOnChange(files: File[]){
        setImages([...images, ...files])
    }

    function handleOnImageDelete(file: File, target: MutableRefObject<HTMLDivElement>){
        gsap.to(target?.current, {
            duration: 0.3,
            y: 24,
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
            <ImagePicker selectedImagesCount={images.length} onChange={handleImagePickerOnChange} ref={imagePickerRef} />
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
