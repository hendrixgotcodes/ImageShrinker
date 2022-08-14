import * as React from 'react'
import * as ReactDom from 'react-dom'
import ImageTray from './components/organisms/ImageTray'

export default function render() {
  ReactDom.render(
    <div className='flex justify-center items-center w-full h-full'>
      {/* <ImagePicker onChange={()=>{}} /> */}
      <ImageTray />
    </div>, document.body
  )
}


render()