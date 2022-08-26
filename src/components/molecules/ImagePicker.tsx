import React, {
  ChangeEvent, forwardRef, memo, Ref
} from "react";
import ImageIcon from "../atoms/Icons/ImageIcon";

interface ImagePickerProps{
  // eslint-disable-next-line no-unused-vars
  onChange: (files: File[])=>void,
  selectedImagesCount:number,
  multiple?: boolean
}

function ImagePicker({
  onChange,
  selectedImagesCount,
  multiple = false
}:ImagePickerProps, ref:Ref<HTMLDivElement>) {
  function handleOnChange({ target }:ChangeEvent<HTMLInputElement>) {
    const files = Array.from(target.files);
    onChange(files);
  }

  return (
    <div className="flex flex-col items-center justify-center text-xs" ref={ref}>
      <button type="button" className="w-28 h-24 border border-gray-red rounded-lg flex justify-center items-center relative duration-300 transition-all active:shadow-inner active:shadow-black/20">
        <div className="w-12 h-12">
          <ImageIcon />
        </div>
        <input
          className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer active:shadow-inner"
          type="file"
          accept="image/*"
          name=""
          id=""
          onChange={handleOnChange}
          title="select an image"
          multiple={multiple}
        />
      </button>
      <span className="text-primary mt-3">
        {selectedImagesCount === 0 && "No Image Selected"}
        {selectedImagesCount === 1 && "1 Image Selected"}
        {selectedImagesCount > 1 && `${selectedImagesCount} Images Selected`}
      </span>
    </div>
  );
}

export default memo(forwardRef(ImagePicker));
