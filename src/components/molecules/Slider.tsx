import RcSlider from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";

type LabelPropType={
    topLeft: string,
    topRight: string,
    bottomLeft: string,
    bottomRight: string,
}

type SliderPropTypes={
    label?:LabelPropType,
    disabled?:boolean,
    // eslint-disable-next-line no-unused-vars
    onChange?:(value: number)=>void,
    value?: number
}

export default function Slider({
  label, disabled = false, onChange, value = 0
}:SliderPropTypes) {
  return (
    <div className="w-full text-xs">
      <div className="w-full flex justify-between items-center text-primary">
        <span>{label?.topLeft}</span>
        <span>{label?.topRight}</span>
      </div>
      <RcSlider
        trackStyle={[
          { backgroundColor: "#121D4C" }
        ]}
        handleStyle={[{ backgroundColor: "#121D4C", accentColor: "#121D4C" }]}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
      <div className="w-full flex justify-between items-center text-gray-dark">
        <span>{label?.bottomLeft}</span>
        <span>{label?.bottomRight}</span>
      </div>
    </div>
  );
}

// export default memo(Slider)
