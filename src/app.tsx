import * as React from 'react'
import * as ReactDom from 'react-dom'
import ImagePicker from './components/ImagePicker'
import ImageTray from './components/ImageTray'

export default function render() {
  ReactDom.render(
    <div className='flex justify-center items-center'>
      {/* <ImagePicker onChange={()=>{}} /> */}
      <ImageTray />
    </div>, document.body
  )
}


render()