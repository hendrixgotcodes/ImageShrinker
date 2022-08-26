import classNames from "classnames";
import { Property } from "csstype";
import React, { memo } from "react";

interface SeparatorProps{
    direction?: "horizontal"|"vertical",
    color?: string,
    size?: "sm" | "lg" | "xl",
    spacing?: Property.Margin<string | number>
}

function Separator({
  direction = "horizontal", color, size = "sm", spacing
}:SeparatorProps) {
  const separatorClasses = classNames({
    "border-b-2": direction === "horizontal" && size === "sm",
    "border-b-4": direction === "horizontal" && size === "lg",
    "border-b-6": direction === "horizontal" && size === "xl",
    "border-l-2": direction === "vertical" && size === "sm",
    "border-l-4": direction === "vertical" && size === "lg",
    "border-l-8": direction === "vertical" && size === "xl",
    "w-full": direction === "horizontal",
    "w-2": direction === "vertical",
    "h-full": direction === "vertical",
    "border-gray-500": true,
  });

  return (
    <div
      className={separatorClasses}
      style={{ borderColor: color, margin: spacing }}
    />
  );
}

export default memo(
  Separator,
  (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps)
);
