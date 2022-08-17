import React, { memo } from 'react'
import {Wave} from '../atoms'

function ProgressBar({progress, loading=false}:{progress:number, loading?:boolean}) {
    
  return (
    <div className='w-full h-full bg-gray-500'>
        <div id='progressbar-fill' className='h-full bg-primary relative transition-all duration-300' style={{width:`${progress}%`}}>
            {
              loading && (
                <div className="h-full w-24 absolute rotate-90 -right-10">
                  <Wave />
                </div>
              )
            }
        </div>
    </div>
  )
}

export default memo(ProgressBar)


