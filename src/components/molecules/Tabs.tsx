import React, { ReactNode, useState } from 'react'
import { Button } from '../atoms'

type TabsProps={
    tabs:{
        title:string,
        children: ReactNode
    }[]
}

export default function Tabs({tabs}:TabsProps) {

    const [currentTab, setCurrentTab] = useState(tabs[0])
    
  return (
    <div className='w-full flex flex-col justify-center items-start'>

        {/* tab buttons */}
        <div className="flex">
            {tabs.map((tab)=>(
                <Button 
                    invertColors={currentTab !== tab}
                    onClick={()=>setCurrentTab(tab)}
                >
                    {tab.title}
                </Button>
            ))}
        </div>

        {/* current tab content */}
        <div className="w-full bg-gray-light py-8 px-4 border-t border-t-gray-500">
            {currentTab.children}
        </div>

    </div>
  )
}
