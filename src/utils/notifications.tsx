import React from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line import/prefer-default-export
export function showDownloadFolder(degradedFileCount:number, directoryLink: string) {
  const handleOnClick = () => window.ipcAPIs.openFolder(directoryLink);

  const toastContent = (
    <div>
      <button type="button" onClick={handleOnClick} className="text-primary underline text-sm">
        {degradedFileCount}
        {" "}
        {degradedFileCount === 1 ? "image" : "images"}
      </button>
      &nbsp;
      successfully degraded.
    </div>
  );

  toast(toastContent, {
    position: "top-center",
    delay: 3000,
    hideProgressBar: true,
    closeButton: false
  });
}
