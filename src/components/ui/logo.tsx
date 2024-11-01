import React from "react";

export function Logo({
  className,
  glow,
}: {
  className?: string;
  glow?: boolean;
}): JSX.Element {
  return (
    <svg
      viewBox="0 0 78 38"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1"
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {glow && (
        <text
          x="6"
          y="25"
          fontSize="12"
          fontFamily="Arial"
          fontWeight="bold"
          fill="url(#logoGradient)"
          className="blur-[3px]"
        >
          Bryan Chung
        </text>
      )}
      <text
        x="6"
        y="25"
        fontSize="12"
        fontFamily="Arial"
        fontWeight="bold"
        fill="white"
      >
        Bryan Chung
      </text>
    </svg>
  );
}
