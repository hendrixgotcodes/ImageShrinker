import React from 'react'
import {toast} from 'react-toastify'


export function showDownloadFolder(degradedFileCount:number,directoryLink: string){

    const handleOnClick = ()=>window.ipcAPIs.openFolder(directoryLink)

    const toastContent = (<div>
        <a onClick={handleOnClick} className="text-primary underline text-sm">
            {degradedFileCount} {degradedFileCount ===1 ? "image" : "images"}
        </a>
        &nbsp;
        successfully degraded.
    </div>)
    
    toast(toastContent, {
        position: "top-center",
        delay: 3000,
        hideProgressBar: true,
        closeButton: false
    })
}