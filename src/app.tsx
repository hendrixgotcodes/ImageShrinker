import * as React from 'react'
import * as ReactDom from 'react-dom'
import Main from './components/screens/Main'
import { AppContextProvider } from './context/AppContext'

export default function render() {
  ReactDom.render(
    <div className='w-full h-full'>
     <AppContextProvider>
        <Main />
     </AppContextProvider>
    </div>, document.body
  )
}


render()