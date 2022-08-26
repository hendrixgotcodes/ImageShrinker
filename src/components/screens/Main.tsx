import React, {
  memo, useCallback, useContext, useEffect, useState
} from "react";
import formatBytes from "../../utils/FormatBytes";
import AppContext from "../../context/AppContext";
import {
  Button, SecondaryButton, Separator, TextInput
} from "../atoms";
import { ProgressBar, Slider, Tabs } from "../molecules";
import ImagesTray from "../organisms/ImagesTray";
import * as animator from "../../utils/animator";
import * as notifications from "../../utils/notifications";

declare global {
    interface Window {
        ipcAPIs:{
            selectFolder: ()=>Promise<string>;
            // eslint-disable-next-line no-unused-vars
            openFolder: (_folderPath:string)=>void
        },
        imageManipulator: {
            degradeImage: (
                // eslint-disable-next-line no-unused-vars
                files: {path:string, size:number}[], degradation: number, destinationFolder: string,
            )=>Promise<void>,
            resizeImage: (
                // eslint-disable-next-line no-unused-vars
                imagePath: string, destinationFolder:string, finalHeight:number, finalWidth: number,
            )=>Promise<void>
        }
    }
}

export default function Main() {
  const {
    images,
    loading,
    destinationFolder,
    degradation,
    resizeHeight,
    resizeWidth,
    setLoading,
    setDestinationFolder,
    setImages,
    setMode,
    resetAppState
  } = useContext(AppContext);
  const [currentTab, setCurrentTab] = useState<string>("Degrade");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (images.length > 0) animator.showFolderPickerButton();
    if (images.length === 0) animator.hideFolderPickerButton();
  }, [images]);

  const handleOnSubmit = useCallback(async () => {
    if (!destinationFolder) {
      animator.shakeFolderPickerButton();
      return;
    }

    setLoading(true);
    if (currentTab === "Degrade") {
      setProgress(50);
      await animator.hideStartButton();
      const imgs:{path:string, size:number}[] = [];
      images.forEach((image) => imgs.push({ path: image.path, size: image.size }));

      await window.imageManipulator.degradeImage(imgs, degradation, destinationFolder,);
      setProgress(100);
      notifications.showDownloadFolder(images.length, destinationFolder);

      setLoading(false);
      await animator.showStartButton();

      setProgress(0);
      resetAppState();
    } else if (currentTab === "Resize") {
      const filePath = images[0].path;

      await animator.hideProgressBar();
      await window.imageManipulator.resizeImage(
        filePath,
        destinationFolder,
        resizeHeight,
        resizeWidth
      );
      await animator.showStartButton();
      setImages([]);
      setLoading(false);
    }
  }, []);

  const handleOnFolderPickerClick = async () => {
    const res = await window.ipcAPIs.selectFolder();
    setDestinationFolder(res);
  };

  return (
    <div className="w-full h-full flex flex-col justify-end items-center relative">

      <ImagesTray />
      <Button
        className="-translate-y-4 opacity-0 bg-gray-darker text-xs text-primary px-2 py-1"
        invertColors
        id="folder-picker"
        onClick={handleOnFolderPickerClick}
        disabled={!(images.length > 0)}
      >
        Set destination folder
      </Button>
      <Separator color="transparent" spacing="1rem 0" />
      <Tabs
        locked={loading}
        // eslint-disable-next-line no-shadow
        onChange={(currentTab) => {
          setCurrentTab(currentTab.title);
          setMode(currentTab.title === "Degrade" ? "degrade" : "resize");
          setImages([]);
        }}
        tabs={[
          {
            title: "Degrade",
            children: <DegradeChildren />
          },
          {
            title: "Resize",
            children: <ResizeChildren />
          },
        ]}
      />
      <Separator color="transparent" spacing="0.5rem 0rem" />

      <div className="flex w-full h-12 overflow-hidden">
        <div className="w-10/12" id="progressbar-wrapper">
          <ProgressBar loading={loading} progress={progress} />
        </div>
        <div className="w-2/12 bg-red-400" id="submitBtn-wrapper">
          <SecondaryButton
            onClick={handleOnSubmit}
            style={{ height: "100%", width: "100%" }}
            disabled={images.length <= 0}
          >
            <span id="btnSubmit--label">Start</span>
          </SecondaryButton>
        </div>
      </div>

    </div>
  );
}

function DegradeChildren() {
  const {
    images, loading, degradation, setDegradation
  } = useContext(AppContext);
  const [totalInitialImageSize, setTotalInitialImageSize] = useState("");
  const [totalFinalImageSize, setTotalFinalImageSize] = useState("");

  useEffect(() => {
    const totalImagesSize = images.reduce((prev, curr) => prev + curr.size, 0);
    setTotalInitialImageSize(formatBytes(totalImagesSize));
  }, [images]);

  useEffect(() => {
    const totalImagesSize = images.reduce((prev, curr) => prev + curr.size, 0);
    setTotalFinalImageSize(`${formatBytes(totalImagesSize - (totalImagesSize * (degradation / 100)))} (${degradation}% lesser)`);
  }, [degradation, images]);

  const handleOnSliderChange = useCallback((value:number) => {
    setDegradation(value);
  }, []);

  return (
    <div>
      <header>
        <h1 className="uppercase text-lg text-primary font-regular">Reduce Image Quality</h1>
        <p className="text-gray-dark text-sm">Use the slider to set the final quality of your image.</p>
      </header>
      <Separator color="transparent" spacing="0.5rem 0rem" />
      <Slider
        disabled={!!((images.length <= 0 || loading === true))}
        label={{
          topLeft: "initial size",
          topRight: "final size",
          bottomLeft: totalInitialImageSize,
          bottomRight: totalFinalImageSize
        }}
        value={images.length === 0 ? 0 : degradation}
        onChange={handleOnSliderChange}
      />
    </div>
  );
}

function ResizeChildrenComponent() {
  const {
    resizeHeight, resizeWidth, setResizeHeight, setResizeWidth
  } = useContext(AppContext);

  return (
    <div className="w-full">
      <header>
        <h1 className="uppercase text-lg text-primary font-regular">Resize Image</h1>
        <p className="text-gray-dark text-sm">Set the new dimensions of your image.</p>
      </header>
      <Separator color="transparent" spacing="0.5rem 0rem" />
      <div className="w-full flex justify-between items-center h-7">
        <TextInput
          type="number"
          bgColor="transparent"
          label="width"
          placeholder="width"
          value={resizeWidth}
          onChange={(e) => setResizeWidth(parseFloat(e.currentTarget.value))}
          autoFocus
        />
        <Separator color="transparent" direction="vertical" spacing="0rem 1rem" />
        <TextInput
          type="number"
          bgColor="transparent"
          label="height"
          placeholder="height"
          value={resizeHeight}
          onChange={(e) => setResizeHeight(parseFloat(e.currentTarget.value))}
        />
      </div>
      <Separator color="transparent" spacing="0.5rem 0rem" />
    </div>
  );
}

const ResizeChildren = memo(ResizeChildrenComponent);
