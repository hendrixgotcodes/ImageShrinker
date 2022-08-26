import { dialog, shell } from "electron";

export async function handleOnSelectFolder() {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: "Select Folder",
    properties: ["openDirectory", "createDirectory"],
  });

  return canceled ? "" : filePaths[0];
}

export async function handleOnOpenFolder(folderPath: string) {
  shell.openPath(folderPath);
}
