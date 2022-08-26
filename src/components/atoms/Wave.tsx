import React from "react";

export default function Wave() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        id="waveSvg-path"
        fill="#121D4C"
        className="transition-all duration-300"
        d="m0 96 48 32c48 32 144 96 240 90.7 96-5.7 192-79.7 288-101.4 96-21.3 192 10.7 288 48 96 37.7 192 79.7 288 58.7s192-107 240-149.3l48-42.7v288H0Z"
      />
    </svg>
  );
}
