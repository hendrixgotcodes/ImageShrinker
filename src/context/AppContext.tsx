import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";

type AppContextType={
    images: File[],
    setImages: Dispatch<SetStateAction<File[]>> | (()=>void)
}

const AppContext = createContext<AppContextType>({
    images: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setImages: ()=>{}
})

export function AppContextProvider({children}:{children:ReactNode}){

    const [images, setImages] = useState<File[]>([])

    const memoised = useMemo(()=>({images, setImages}), [images])
    
    return(
        <AppContext.Provider value={{...memoised}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext

