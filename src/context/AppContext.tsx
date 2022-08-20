import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";

type ResizeType={
    finalHeight: number,
    finalWidth: number
}

type AppContextType={
    mode: "degrade" | "resize"
    images: File[],
    loading: boolean,
    destinationFolder: string,
    degradation: number,
    resizeHeight: number,
    resizeWidth: number,
    setImages: Dispatch<SetStateAction<File[]>> | (()=>void),
    setLoading: Dispatch<SetStateAction<boolean>> | (()=>void),
    setDestinationFolder: Dispatch<SetStateAction<string>> | (()=>void),
    setDegradation: Dispatch<SetStateAction<number>> | (()=>void),
    setMode: Dispatch<SetStateAction<"degrade"|"resize">> | (()=>void),
    setResizeHeight: Dispatch<SetStateAction<number>> | (()=>void)
    setResizeWidth: Dispatch<SetStateAction<number>> | (()=>void)

}

const AppContext = createContext<AppContextType>({
    mode: "degrade",
    resizeHeight:0,
    resizeWidth:0,
    images: [],
    loading: false,
    destinationFolder: "",
    degradation: 60,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setImages: ()=>{},
    setLoading: ()=>{},
    setDestinationFolder: ()=>{},
    setDegradation: ()=>{},
    setResizeHeight: ()=>{},
    setResizeWidth: ()=>{},
    setMode: ()=>{},
})

export function AppContextProvider({children}:{children:ReactNode}){

    const [mode, setMode] = useState<"degrade" |"resize">("degrade")
    const [images, setImages] = useState<File[]>([])
    const [loading, setLoading] = useState(false)
    const [destinationFolder, setDestinationFolder] = useState<string>("")
    const [degradation, setDegradation] = useState<number>(60)
    const [resizeHeight, setResizeHeight] = useState<number>(0)
    const [resizeWidth, setResizeWidth] = useState<number>(0)

    const memoised = useMemo(()=>({
        mode,
        images, 
        destinationFolder, 
        degradation, 
        loading, 
        resizeHeight,
        resizeWidth,
        setLoading, 
        setImages, 
        setDestinationFolder, 
        setDegradation,
        setMode,
        setResizeHeight,
        setResizeWidth,
    }), [images, loading, destinationFolder, degradation, mode, resizeHeight, resizeWidth])
    
    return(
        <AppContext.Provider value={{...memoised}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext

