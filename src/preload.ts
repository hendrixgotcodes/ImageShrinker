// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("ipcAPIs", {
  selectFolder: () => ipcRenderer.invoke("dialog:selectFolder"),
});

contextBridge.exposeInMainWorld("imageManipulator", {
  degradeImage: (
    files:{path:string, size:number}[], 
    degradation:number,
    destinationFolder: string
  )=> {
    ipcRenderer.invoke("imageManipulator:degradeImage", files, degradation, destinationFolder)
  },
  resizeImage: (imagePath: string, finalHeight:number, finalWidth:number)=>{
    ipcRenderer.invoke("imageManipulator:resizeImage", imagePath, finalHeight, finalWidth)
  }
  // sendImageProcessingProgress
})