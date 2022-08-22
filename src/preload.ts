// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("ipcAPIs", {
  selectFolder: () => ipcRenderer.invoke("dialog:selectFolder"),
  openFolder: (folderPath:string) => ipcRenderer.send("shell:openFolder", folderPath),
});

contextBridge.exposeInMainWorld("imageManipulator", {
  degradeImage: (
    files:{path:string, size:number}[], 
    degradation:number,
    destinationFolder: string
  )=> {
    ipcRenderer.invoke("imageManipulator:degradeImage", files, degradation, destinationFolder)
  },
  resizeImage: (imagePath: string, destinationFolder:string,finalHeight:number, finalWidth:number)=>{
    ipcRenderer.invoke("imageManipulator:resizeImage", imagePath, destinationFolder, finalHeight, finalWidth)
  }
  // sendImageProcessingProgress
})