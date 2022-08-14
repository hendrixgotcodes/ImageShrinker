import * as React from 'react'
import * as ReactDom from 'react-dom'
import ImageTray from './components/organisms/ImageTray'
import { Button, SecondaryButton } from './components/molecules'

export default function render() {
  ReactDom.render(
    <div className='flex justify-center items-center w-full h-full'>
      {/* <ImagePicker onChange={()=>{}} /> */}
      {/* <ImageTray /> */}
      <SecondaryButton invertColors>
        <span className="text-xs p-4 inline-block text-inherit">Hello world</span>
      </SecondaryButton>
    </div>, document.body
  )
}


render()