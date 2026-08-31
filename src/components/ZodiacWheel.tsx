import React from 'react';

interface ZodiacWheelProps {
  className?: string;
  size?: number;
}

const ZODIAC_SIGNS = [
  { symbol: '♈', name: 'Aries', angle: 0 },
  { symbol: '♉', name: 'Taurus', angle: 30 },
  { symbol: '♊', name: 'Gemini', angle: 60 },
  { symbol: '♋', name: 'Cancer', angle: 90 },
  { symbol: '♌', name: 'Leo', angle: 120 },
  { symbol: '♍', name: 'Virgo', angle: 150 },
  { symbol: '♎', name: 'Libra', angle: 180 },
  { symbol: '♏', name: 'Scorpio', angle: 210 },
  { symbol: '♐', name: 'Sagittarius', angle: 240 },
  { symbol: '♑', name: 'Capricorn', angle: 270 },
  { symbol: '♒', name: 'Aquarius', angle: 300 },
  { symbol: '♓', name: 'Pisces', angle: 330 },
];

export const ZodiacWheel: React.FC<ZodiacWheelProps> = ({ 
  className = "w-64 h-64 text-amber-900",
  size = 200 
}) => {
  const center = 100;
  const outerRadius = 94;
  const zodiacRadius = 78;
  const innerRadius = 60;
  const centerRadius = 24;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Continuously Rolling Zodiac Wheel */}
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full animate-spin-slow origin-center drop-shadow-xs"
        aria-label="Rolling Zodiac Wheel"
      >
        {/* Outer Dashed Astrological Horizon Ring */}
        <circle 
          cx={center} 
          cy={center} 
          r={outerRadius} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeDasharray="3 3"
          className="opacity-70"
        />

        {/* Outer Solid Ring */}
        <circle 
          cx={center} 
          cy={center} 
          r={outerRadius - 6} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.75" 
          className="opacity-85"
        />

        {/* Inner Solid Zodiac Boundary Ring */}
        <circle 
          cx={center} 
          cy={center} 
          r={innerRadius} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="opacity-80"
        />

        {/* Middle decorative micro-ticks ring */}
        <circle 
          cx={center} 
          cy={center} 
          r={innerRadius + 4} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.75" 
          strokeDasharray="1 2"
          className="opacity-60"
        />

        {/* 12 House Dividing Rays */}
        {ZODIAC_SIGNS.map((item, idx) => {
          const rad = (item.angle * Math.PI) / 180;
          const x1 = center + innerRadius * Math.cos(rad);
          const y1 = center + innerRadius * Math.sin(rad);
          const x2 = center + (outerRadius - 6) * Math.cos(rad);
          const y2 = center + (outerRadius - 6) * Math.sin(rad);

          return (
            <line
              key={`spoke-${idx}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1.2"
              className="opacity-60"
            />
          );
        })}

        {/* 12 Zodiac Symbols placed evenly between houses */}
        {ZODIAC_SIGNS.map((item, idx) => {
          // Place in the middle of each 30 deg sector (+15 deg offset)
          const angle = item.angle + 15;
          const rad = (angle * Math.PI) / 180;
          const x = center + zodiacRadius * Math.cos(rad);
          const y = center + zodiacRadius * Math.sin(rad);

          return (
            <g key={`sign-${idx}`} transform={`translate(${x}, ${y})`}>
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fill="currentColor"
                fontSize="13"
                fontWeight="bold"
                fontFamily="'Segoe UI Symbol', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif"
                className="select-none opacity-95"
              >
                {item.symbol}
              </text>
            </g>
          );
        })}

        {/* Central Astrological Core / Navagraha Center */}
        <circle 
          cx={center} 
          cy={center} 
          r={centerRadius} 
          fill="currentColor" 
          fillOpacity="0.08"
          stroke="currentColor" 
          strokeWidth="1.5" 
        />

        {/* Central Geometric 8-point Sun Rays */}
        <line x1={center} y1={center - centerRadius} x2={center} y2={center + centerRadius} stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-50" />
        <line x1={center - centerRadius} y1={center} x2={center + centerRadius} y2={center} stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-50" />

        {/* Center Sacred Sun / Om glyph */}
        <circle cx={center} cy={center} r="6" fill="currentColor" className="opacity-70" />
        <circle cx={center} cy={center} r="2" fill="#fff" />
      </svg>
    </div>
  );
};
