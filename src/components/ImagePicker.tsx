import React, { ChangeEvent, forwardRef, useState, Ref } from 'react'
import ImageIcon from './Icons/ImageIcon'

function ImagePicker({onChange}:{onChange: (files: File[])=>void}, ref:Ref<HTMLDivElement>) {

  const [selectedImagesCount, setSelectedImagesCount] = useState(0)

  function handleOnChange({target}:ChangeEvent<HTMLInputElement>){
    const files =Array.from(target.files)
    onChange(files)
    setSelectedImagesCount(selectedImagesCount + files.length)
  }
  
  return (
    <div className='flex flex-col items-center justify-center text-xs' ref={ref}>
      <div className='w-28 h-24 border border-gray-red rounded-lg flex justify-center items-center relative'>
          <div className="w-12 h-12">
            <ImageIcon />
          </div>
        <input 
          className='absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer' 
          type="file" 
          accept='image/*'
          name="" 
          id=""
          onChange={handleOnChange}
          title="select an image"
          multiple
        />
      </div>
      <label className='text-primary mt-3'>
        {selectedImagesCount === 0 && "No Image Selected"}
        {selectedImagesCount === 1 && "1 Image Selected"}
        {selectedImagesCount >1 && `${selectedImagesCount} Images Selected`}
      </label>
    </div>
  )
}

export default forwardRef(ImagePicker)
