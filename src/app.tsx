import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Separator } from './components/atoms'
import Main from './components/screens/Main'

export default function render() {
  ReactDom.render(
    <div className='w-full h-full'>
     <Main />
    </div>, document.body
  )
}


render()