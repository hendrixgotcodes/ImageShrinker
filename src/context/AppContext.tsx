import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";

type AppContextType={
    images: File[],
    loading: boolean,
    destinationFolder: string|null,
    setImages: Dispatch<SetStateAction<File[]>> | (()=>void),
    setLoading: Dispatch<SetStateAction<boolean>> | (()=>void),
    setDestinationFolder: Dispatch<SetStateAction<string|null>> | (()=>void),
}

const AppContext = createContext<AppContextType>({
    images: [],
    loading: false,
    destinationFolder: undefined,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setImages: ()=>{},
    setLoading: ()=>{},
    setDestinationFolder: ()=>{},
})

export function AppContextProvider({children}:{children:ReactNode}){

    const [images, setImages] = useState<File[]>([])
    const [loading, setLoading] = useState(false)
    const [destinationFolder, setDestinationFolder] = useState<string|null>(null)

    const memoised = useMemo(()=>({images, destinationFolder, loading, setLoading, setImages, setDestinationFolder}), [images, loading])
    
    return(
        <AppContext.Provider value={{...memoised}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext

