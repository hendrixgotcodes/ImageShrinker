import * as React from 'react'
import * as ReactDom from 'react-dom'
import { SecondaryButton, TextInput } from './components/atoms'
import { ProgressBar, Slider, Tabs } from './components/molecules'

export default function render() {
  ReactDom.render(
    <div className='flex justify-center items-center w-full h-full'>
      {/* <ImagePicker onChange={()=>{}} /> */}
      {/* <ImageTray /> */}
      {/* <Tabs
          tabs={[
            {
              title: "Degrade", 
              children: (
              <Slider 
                  label={{topLeft: "Initial size", topRight: "Final size", bottomLeft: "6.4MB", bottomRight: "3.2MB"}}/>
              )
            },
            {title: "Resize", children: "resize"}
          ]}
      /> */}
      {/* <div className='h-16 w-full flex justify-center items-center bg-red-400'>
        <div className="w-4/5 h-full"><ProgressBar progress={48} /></div>
        <SecondaryButton className='h-full w-1/5' >Submit</SecondaryButton>
      </div> */}
      <TextInput label='width'placeholder="width" />
    </div>, document.body
  )
}


render()