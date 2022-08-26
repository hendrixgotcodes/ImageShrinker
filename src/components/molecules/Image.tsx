import React, {
  MutableRefObject, useEffect, useMemo, useRef, useState
} from "react";
import { CloseIcon } from "../atoms";

export default function Image(
  { img, onDelete }:{
    img: File,
    // eslint-disable-next-line no-unused-vars, no-shadow
    onDelete?: (img:File, target:MutableRefObject<HTMLDivElement>)=>void}
) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    let fileReader = new FileReader();
    if (imgRef) {
      fileReader.onload = () => {
        setImgUrl(fileReader.result as string);
        fileReader = null;
      };
      fileReader.readAsDataURL(img);
    }
  }, []);

  const memoisedImgUrl = useMemo(() => imgUrl, [imgUrl]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-xs w-28">
      <div className="w-30 h-24 rounded-lg flex justify-center items-center relative overflow-hidden bg-gray-dark/20 border-none">
        <img
          src={memoisedImgUrl}
            // alt={img.name}
          className="w-full h-full object-cover"
          ref={imgRef}
          alt=""
        />
        <button type="button" onClick={() => onDelete(img, containerRef)} className="w-full h-full absolute top-0 left-0 bg-black/60 flex justify-center items-center transition-all duration-300 cursor-pointer opacity-0 hover:opacity-100">
          <div className="w-12 h-12">
            <CloseIcon />
          </div>
        </button>
      </div>
      <span className="text-gray-dark mt-3 break-all">
        {img.name}
      </span>
    </div>
  );
}

// function ImageSkeleton() {
//   useEffect(() => {
//     gsap.to(".img-skeleton", {
//       opacity: 0.6,
//       duration: 0.5,
//       yoyo: true,
//       repeat: -1
//     });
//   }, []);

//   return (
//     <div
//       className="img-skeleton flex flex-col items-center justify-center text-xs w-28"
//       id=""
//     >
//       <div className="w-30 h-24 bg-gray-darker rounded-lg" />
//       <div className="w-30 h-3 rounded-lg mt-3 bg-gray-darker" />

//     </div>
//   );
// }
