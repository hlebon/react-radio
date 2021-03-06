import React from "react";

function SVGRadio({ active, activeColor, inactiveColor }) {
  return (
    <svg height="20px" width="20px">
      <circle
        cx="10"
        cy="10"
        r="7"
        stroke={active ? activeColor : inactiveColor}
        strokeWidth="2"
        fill={"#ffffff"}
      />
      {active ? (
        <circle
          cx="10"
          cy="10"
          r="4"
          fill={active ? activeColor : inactiveColor}
        />
      ) : null}
    </svg>
  );
}

export default SVGRadio;
