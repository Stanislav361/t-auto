import React from "react"

export function Logo({ className = "", showText = true }: { className?: string, showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon: Stylized Car Silhouette */}
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 100 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-500 flex-shrink-0"
      >
        {/* Car Body Outline */}
        <path 
          d="M5 45H95L90 35H75L65 20H35L20 35H10L5 45Z" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Wheels */}
        <circle cx="25" cy="45" r="8" stroke="currentColor" strokeWidth="4" />
        <circle cx="75" cy="45" r="8" stroke="currentColor" strokeWidth="4" />
        
        {/* Speed Lines */}
        <path 
          d="M10 25H30" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          className="opacity-50"
        />
        <path 
          d="M5 30H20" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          className="opacity-50"
        />
      </svg>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-none justify-center">
          <span className="font-black text-2xl tracking-tighter text-white uppercase italic transform -skew-x-12">
            T<span className="text-yellow-500">-</span>AUTO
          </span>
          <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase ml-1">
            ТЕХЦЕНТР
          </span>
        </div>
      )}
    </div>
  )
}
