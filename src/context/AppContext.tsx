import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";

type AppContextType={
    images: File[],
    setImages: Dispatch<SetStateAction<File[]>> | (()=>void),
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>> | (()=>void)
}

const AppContext = createContext<AppContextType>({
    images: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setImages: ()=>{},
    loading: false,
    setLoading: ()=>{}
})

export function AppContextProvider({children}:{children:ReactNode}){

    const [images, setImages] = useState<File[]>([])
    const [loading, setLoading] = useState(false)

    const memoised = useMemo(()=>({images, setImages, loading, setLoading}), [images, loading])
    
    return(
        <AppContext.Provider value={{...memoised}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext

