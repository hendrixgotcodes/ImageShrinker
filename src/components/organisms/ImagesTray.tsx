import classNames from 'classnames'
import gsap from 'gsap'
import { nanoid } from 'nanoid'
import React, { MutableRefObject, useContext, useEffect, useRef } from 'react'
import AppContext from '../../context/AppContext'
import { Image, ImagePicker } from '../molecules'

export default function ImagesTray() {

    const {images, mode, setImages} = useContext(AppContext)
    const imagePickerRef = useRef<HTMLDivElement>(null)
    useEffect(()=>imagePickerRef?.current.scrollIntoView(),[images])

    const imagePickerWrapperClass = classNames({
        "ml-2 overflow-visible": false,
        "mr-14": images.length > 0 ? true : false
    })

    

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
    <div id="img-tray" className='w-full flex overflow-x-auto justify-center items-start custom_scrollbar--hor overflow-y-visible transition-all duration-300'>
        {
            <div className={imagePickerWrapperClass}>
                <ImagePicker 
                    selectedImagesCount={images.length} 
                    onChange={handleImagePickerOnChange} 
                    ref={imagePickerRef} 
                    multiple={mode==="degrade" ? true : false}
                />
            </div>
        }
        {
            images.map((image)=>(
                <div className="mr-14 last:mr-2 overflow-y-visible" key={nanoid(5)}>
                    <Image onDelete={handleOnImageDelete} img={image} />
                </div>
            ))
        }
    </div>
  )
}
