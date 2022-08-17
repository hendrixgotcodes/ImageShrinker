import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import Main from './components/screens/Main'
import { AppContextProvider } from './context/AppContext'

export default function render() {

  const root = ReactDom.createRoot(document.getElementById("root"))
  
  root.render(
    <div className='w-full h-full'>
     <AppContextProvider>
        <Main />
     </AppContextProvider>
    </div>
  )
}


render()