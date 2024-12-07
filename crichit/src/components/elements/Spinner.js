import React from "react";
import "./spinner.css"; // Ensure this file contains the necessary styles.

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="spinner relative w-[25px] h-[25px]"
        viewBox="0 0 100 100"
      >
        <circle
          className="line-circle-2"
          cx="50"
          cy="50"
          r="35" // Adjusted radius to fit within the SVG bounds.
          stroke="#BFBAF2"
          strokeWidth="15"
          fill="none"
        />
        <circle
          className="line-circle"
          cx="50"
          cy="50"
          r="35" // Adjusted radius to fit within the SVG bounds.
          stroke="currentColor"
          strokeWidth="15"
          fill="none"
        />
      </svg>
    </div>
  );
}
