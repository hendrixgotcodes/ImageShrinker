import { dialog } from "electron";

export async function handleOnSelectFolder(){
    const {canceled, filePaths} = await dialog.showOpenDialog({
        title: "Select Folder",
        properties: ["openDirectory", "createDirectory"]
    })

    return canceled ? "" : filePaths[0]
}