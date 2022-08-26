import classNames from "classnames";
import React, { memo } from "react";

function ProgressBar({ progress, loading = false }:{progress:number, loading?:boolean}) {
  const progressBarFillClass = classNames({
    "h-full bg-primary absolute top-0 left-0 transition-all duration-300 overflow-hidden": true,
    loading
  });

  return (
    <div className="w-full h-full bg-gray-500 relative">
      <div
        id="progressbar-fill"
        className={progressBarFillClass}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default memo(ProgressBar);
