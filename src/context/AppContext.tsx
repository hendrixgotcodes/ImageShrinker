import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";

type ResizeType={
    imageUrl: string,
    finalHeight: number,
    finalWidth: number
}

type AppContextType={
    mode: "degrade" | "resize"
    images: File[],
    loading: boolean,
    destinationFolder: string,
    degradation: number,
    resize: ResizeType,
    setImages: Dispatch<SetStateAction<File[]>> | (()=>void),
    setLoading: Dispatch<SetStateAction<boolean>> | (()=>void),
    setDestinationFolder: Dispatch<SetStateAction<string>> | (()=>void),
    setDegradation: Dispatch<SetStateAction<number>> | (()=>void),
    setMode: Dispatch<SetStateAction<"degrade"|"resize">> | (()=>void),
    setResize: Dispatch<SetStateAction<ResizeType>> | (()=>void)

}

const AppContext = createContext<AppContextType>({
    mode: "degrade",
    resize: {
        finalHeight: 0,
        finalWidth: 0,
        imageUrl: ""
    },
    images: [],
    loading: false,
    destinationFolder: "",
    degradation: 60,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setImages: ()=>{},
    setLoading: ()=>{},
    setDestinationFolder: ()=>{},
    setDegradation: ()=>{},
    setResize: ()=>{},
    setMode: ()=>{},
})

export function AppContextProvider({children}:{children:ReactNode}){

    const [mode, setMode] = useState<"degrade" |"resize">("degrade")
    const [images, setImages] = useState<File[]>([])
    const [loading, setLoading] = useState(false)
    const [destinationFolder, setDestinationFolder] = useState<string>("")
    const [degradation, setDegradation] = useState<number>(60)
    const [resize, setResize] = useState<ResizeType>({
        finalHeight: 0,
        finalWidth: 0,
        imageUrl: ""
    })

    const memoised = useMemo(()=>({
        mode,
        images, 
        destinationFolder, 
        degradation, 
        loading, 
        resize,
        setLoading, 
        setImages, 
        setDestinationFolder, 
        setDegradation,
        setMode,
        setResize,
    }), [images, loading, destinationFolder, degradation, mode])
    
    return(
        <AppContext.Provider value={{...memoised}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext

