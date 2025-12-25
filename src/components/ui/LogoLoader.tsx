
import React from "react";

// This SVG traces around the SKITM logo using stroke-dasharray animation.
const LogoLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
    <svg
      viewBox="0 0 512 512"
      width="128"
      height="128"
      className="animate-logo-draw"
    >
      <image
        href="/SkitmLogo.png"
        x="0"
        y="0"
        height="512"
        width="512"
        opacity="0.05"
      />
      <path
        d="M100,200 Q256,50 412,200 Q308,170 256,400 Q204,170 100,200 Z"
        fill="none"
        stroke="#112357"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 1500,
          strokeDashoffset: 0,
          animation:
            "logo-draw 2s linear forwards, logo-fade 0.6s 1.9s linear forwards",
        }}
      />
      <style>
        {`
        @keyframes logo-draw {
          from { stroke-dashoffset: 1500; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes logo-fade {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        `}
      </style>
    </svg>
  </div>
);

export default LogoLoader;
