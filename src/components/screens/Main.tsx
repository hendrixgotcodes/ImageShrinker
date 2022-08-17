import React, { memo, useContext, useEffect, useState } from 'react'
import formatBytes from '../../utils/FormatBytes'
import AppContext from '../../context/AppContext'
import { Button, SecondaryButton, Separator, TextInput } from '../atoms'
import { ProgressBar, Slider, Tabs } from '../molecules'
import ImageTray from '../organisms/ImageTray'
import { hideStartButton, showFolderPickerButton } from '../../utils/animators'
// import logo from '../../assets/Logo.png'

declare global {
    interface Window {
        ipcAPIs:{
            selectFolder: ()=>Promise<string>;
        }
    }
}


export default function Main() {

    const {images} = useContext(AppContext)

    useEffect(()=>{
        if(images.length>0) showFolderPickerButton()
    },[images])

    const handleOnSubmit = async()=>{
        await hideStartButton()
    }
    
  return (
    <div className='w-full h-full flex flex-col justify-end items-center relative'>
        
        <ImageTray />
        <Button
            className='-translate-y-4 opacity-0 bg-gray-darker text-xs text-primary px-2 py-1'
            invertColors={true} 
            id="folder-picker"
            onClick={async()=>{
                const res =await window.ipcAPIs.selectFolder()
                console.log(res)
            }}
        >
                Select download folder
            </Button>
        <Separator color='transparent' spacing={"1rem 0"}  />
        <Tabs 
            tabs={[
                {
                    title: "Degrade",
                    children: <DegradeChildren/>
                },
                {
                    title: "Resize",
                    children: <ResizeChildren/>
                },
            ]}
        />
        <Separator color='transparent' spacing={"0.5rem 0rem"} />
            
        <div className="flex w-full bg-red-500 h-12 overflow-hidden">
            <div className="w-10/12" id='progressbar-wrapper'>
                <ProgressBar progress={50} />
            </div>
            <div className="w-2/12" id='submitBtn-wrapper'>
                <SecondaryButton onClick={handleOnSubmit} style={{height: "100%", width: "100%"}}>
                    <span id="btnSubmit--label">Start</span>
                </SecondaryButton>
            </div>
        </div>

    </div>
  )
}

function DegradeChildren(){

    const {images} = useContext(AppContext)
    const [totalInitialImageSize, setTotalInitialImageSize] = useState("")
    const [totalFinalImageSize, setTotalFinalImageSize] = useState("")
    const [sliderValue, setSliderValue] = useState(0)

    useEffect(()=>{
        const totalImagesSize = images.reduce((prev, curr)=>prev + curr.size, 0)
        setTotalInitialImageSize(formatBytes(totalImagesSize))
    }, [images])

    useEffect(()=>{
        const totalImagesSize = images.reduce((prev, curr)=>prev + curr.size, 0)
        setTotalFinalImageSize(`${formatBytes(totalImagesSize - (totalImagesSize * (sliderValue/100)))} (${sliderValue}% lesser)`)
    }, [sliderValue,images])

    
    function handleOnSliderChange(value:number){
        setSliderValue(value)
    }
    
    return(
        <div>
            <header>
                <h1 className='uppercase text-lg text-primary font-regular'>Reduce Image Quality</h1>
                <p className='text-gray-dark text-sm'>Use the slider to set the final quality of your image.</p>
            </header>
            <Separator color='transparent' spacing={"0.5rem 0rem"} />
            <Slider
                disabled={images.length >0 ? false : true} 
                label={{
                    topLeft: "initial size",
                    topRight: "final size",
                    bottomLeft: totalInitialImageSize,
                    bottomRight: totalFinalImageSize
                }}
                value={sliderValue}
                onChange={handleOnSliderChange}
            />
        </div>
    )
}

function ResizeChildrenComponent(){
    return(
        <div className='w-full'>
            <header>
                <h1 className='uppercase text-lg text-primary font-regular'>Resize Image</h1>
                <p className='text-gray-dark text-sm'>Set the new dimensions for your image.</p>
            </header>
            <Separator color='transparent' spacing={"0.5rem 0rem"} />
            <div className="w-full flex justify-between items-center h-7">
                <TextInput type="number" bgColor="transparent" label='width' placeholder='width' />
                <Separator color='transparent' direction='vertical' spacing={"0rem 1rem"} />
                <TextInput type="number" bgColor="transparent" label='height' placeholder='height' />
            </div>  
            <Separator color='transparent' spacing={"0.5rem 0rem"} />
        </div>
    )
}

const ResizeChildren = memo(ResizeChildrenComponent)