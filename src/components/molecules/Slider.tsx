import React from 'react'
import RcSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

type LabelPropType={
    topLeft: string,
    topRight: string,
    bottomLeft: string,
    bottomRight: string,
}

export default function Slider({label}:{label?:LabelPropType}) {
  return (
    <div className='w-full text-xs'>
        <div className="w-full flex justify-between items-center text-primary">
            <span>{label?.topLeft}</span>
            <span>{label?.topRight}</span>
        </div>
        <RcSlider  
            trackStyle={[
                {backgroundColor: "#121D4C"}
            ]}
            handleStyle={[{backgroundColor: "#121D4C", accentColor:"#121D4C"}]}
            // railStyle={{backgroundColor: "#121D4C", accentColor:"#121D4C"}}
        />
        <div className="w-full flex justify-between items-center text-gray-dark">
            <span>{label?.bottomLeft}</span>
            <span>{label?.bottomRight}</span>
        </div>
    </div>
  )
}
