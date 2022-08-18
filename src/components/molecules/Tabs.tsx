import { nanoid } from 'nanoid'
import React, { ReactNode, useState } from 'react'
import { Button } from '../atoms'
import LockIcon from '../atoms/Icons/LockIcon'

type TabsProps={
    tabs:{
        title:string,
        children: ReactNode
    }[],
    onChange?: (currentTab: {title:string, children:ReactNode})=>void,
    locked?: boolean
}

function Tabs({onChange,tabs, locked=false}:TabsProps) {

    const [currentTab, setCurrentTab] = useState(tabs[0])

    function changeTab(tab: typeof currentTab){
        setCurrentTab(tab)
        onChange(tab)
    }
    
  return (
    <div className='w-full flex flex-col justify-center items-start'>

        {/* tab buttons */}
        <div className="flex">
            {tabs.map((tab)=>(
                <Button 
                    invertColors={currentTab.title !== tab.title}
                    onClick={()=>changeTab(tab)}
                    key={nanoid(5)}
                    disabled={locked}
                >
                    <div className="flex items-center">
                        {tab.title} &nbsp;
                        {
                            locked && (<div className="w-2 h-2">
                            <LockIcon />
                        </div>)
                        }
                    </div>
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

export default Tabs
