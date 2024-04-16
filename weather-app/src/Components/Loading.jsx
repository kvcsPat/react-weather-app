import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "../Style/Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <RotatingLines
        visible={true}
        height="85"
        width="85"
        strokeColor="#f5f5f5"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
