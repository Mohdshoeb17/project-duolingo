import React from 'react';

interface MascotProps {
  mood?: 'happy' | 'thinking' | 'celebrate' | 'sad' | 'waving';
  className?: string;
  size?: number;
}

export const Mascot: React.FC<MascotProps> = ({ mood = 'happy', className = '', size = 120 }) => {
  return (
    <div
      className={`relative select-none inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transition-transform hover:scale-105 duration-200"
      >
        {/* Drop shadow / foot base */}
        <ellipse cx="80" cy="150" rx="42" ry="7" fill="#000000" opacity="0.12" />

        {/* Feet */}
        <ellipse cx="60" cy="144" rx="12" ry="7" fill="#FF9600" />
        <ellipse cx="100" cy="144" rx="12" ry="7" fill="#FF9600" />

        {/* Main Body (Friendly Owl Mascot) */}
        <rect
          x="30"
          y="35"
          width="100"
          height="105"
          rx="50"
          fill="#58CC02"
        />
        {/* Body highlight */}
        <path
          d="M 45 45 Q 80 35 115 45"
          stroke="#79DE27"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Belly patch */}
        <ellipse cx="80" cy="105" rx="32" ry="28" fill="#F7F7F7" />
        {/* Belly feather scallops */}
        <path
          d="M 68 98 Q 74 104 80 98 Q 86 104 92 98"
          stroke="#E5E5E5"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 73 112 Q 80 117 87 112"
          stroke="#E5E5E5"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Wings */}
        {mood === 'celebrate' ? (
          <>
            {/* Raised celebratory wings */}
            <path
              d="M 32 80 C 10 55 15 35 25 35 C 35 35 38 65 32 80 Z"
              fill="#46A302"
            />
            <path
              d="M 128 80 C 150 55 145 35 135 35 C 125 35 122 65 128 80 Z"
              fill="#46A302"
            />
          </>
        ) : mood === 'waving' ? (
          <>
            <path
              d="M 30 90 C 18 80 18 105 32 110 Z"
              fill="#46A302"
            />
            {/* Waving right wing */}
            <path
              d="M 128 80 C 150 50 148 35 138 40 C 125 50 124 75 128 80 Z"
              fill="#46A302"
            />
          </>
        ) : (
          <>
            {/* Resting wings */}
            <ellipse cx="26" cy="95" rx="9" ry="22" fill="#46A302" transform="rotate(10 26 95)" />
            <ellipse cx="134" cy="95" rx="9" ry="22" fill="#46A302" transform="rotate(-10 134 95)" />
          </>
        )}

        {/* Big Expressive Eye Glasses / Patches */}
        <circle cx="60" cy="72" r="23" fill="#FFFFFF" stroke="#46A302" strokeWidth="3" />
        <circle cx="100" cy="72" r="23" fill="#FFFFFF" stroke="#46A302" strokeWidth="3" />

        {/* Eyes based on mood */}
        {mood === 'sad' ? (
          <>
            {/* Sad eyes with tear */}
            <circle cx="62" cy="74" r="8" fill="#4B4B4B" />
            <circle cx="98" cy="74" r="8" fill="#4B4B4B" />
            <circle cx="60" cy="71" r="3" fill="#FFFFFF" />
            <circle cx="96" cy="71" r="3" fill="#FFFFFF" />
            {/* Tear drop */}
            <circle cx="50" cy="90" r="4.5" fill="#1CB0F6" />
          </>
        ) : mood === 'celebrate' ? (
          <>
            {/* Joyful closed curved eyes */}
            <path
              d="M 50 72 Q 60 62 70 72"
              stroke="#4B4B4B"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 90 72 Q 100 62 110 72"
              stroke="#4B4B4B"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Rosy cheeks */}
            <circle cx="48" cy="85" r="7" fill="#FFC800" opacity="0.6" />
            <circle cx="112" cy="85" r="7" fill="#FFC800" opacity="0.6" />
          </>
        ) : mood === 'thinking' ? (
          <>
            {/* Thinking looking upwards */}
            <circle cx="63" cy="67" r="9" fill="#4B4B4B" />
            <circle cx="103" cy="67" r="9" fill="#4B4B4B" />
            <circle cx="65" cy="65" r="3.5" fill="#FFFFFF" />
            <circle cx="105" cy="65" r="3.5" fill="#FFFFFF" />
          </>
        ) : (
          <>
            {/* Normal big bright eyes */}
            <circle cx="62" cy="72" r="10" fill="#4B4B4B" />
            <circle cx="98" cy="72" r="10" fill="#4B4B4B" />
            <circle cx="60" cy="69" r="4" fill="#FFFFFF" />
            <circle cx="96" cy="69" r="4" fill="#FFFFFF" />
            {/* Tiny highlight */}
            <circle cx="65" cy="74" r="1.5" fill="#FFFFFF" />
            <circle cx="101" cy="74" r="1.5" fill="#FFFFFF" />
          </>
        )}

        {/* Beak */}
        <polygon points="73,79 87,79 80,93" fill="#FF9600" />
        <polygon points="75,81 85,81 80,88" fill="#FFC800" />

        {/* Cute tuft of feathers on head */}
        <path
          d="M 76 35 C 73 22 80 18 80 18 C 80 18 87 22 84 35 Z"
          fill="#46A302"
        />
        <path
          d="M 83 35 C 85 24 93 22 93 22 C 93 22 92 28 88 36 Z"
          fill="#58CC02"
        />
      </svg>
    </div>
  );
};
