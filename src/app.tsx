import * as React from 'react'
import * as ReactDom from 'react-dom'
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
      <div className='h-16 w-full'><ProgressBar progress={98} /></div>
    </div>, document.body
  )
}


render()