export function FloralDivider() {
  return (
    <svg
      viewBox="0 0 400 60"
      className="w-full h-12 md:h-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ===== CENTER LARGE FLOWER ===== */}
      {/* Outer petals ring */}
      <ellipse cx="200" cy="18" rx="6" ry="12" fill="#E6007E" transform="rotate(0 200 30)" />
      <ellipse cx="200" cy="18" rx="6" ry="12" fill="#D4005E" transform="rotate(45 200 30)" />
      <ellipse cx="200" cy="18" rx="6" ry="12" fill="#E6007E" transform="rotate(90 200 30)" />
      <ellipse cx="200" cy="18" rx="6" ry="12" fill="#D4005E" transform="rotate(135 200 30)" />
      <ellipse cx="200" cy="18" rx="6" ry="12" fill="#E6007E" transform="rotate(180 200 30)" />
      <ellipse cx="200" cy="18" rx="6" ry="12" fill="#D4005E" transform="rotate(225 200 30)" />
      <ellipse cx="200" cy="18" rx="6" ry="12" fill="#E6007E" transform="rotate(270 200 30)" />
      <ellipse cx="200" cy="18" rx="6" ry="12" fill="#D4005E" transform="rotate(315 200 30)" />
      {/* Inner petals ring */}
      <ellipse cx="200" cy="22" rx="4" ry="8" fill="#FF4DA6" transform="rotate(22 200 30)" />
      <ellipse cx="200" cy="22" rx="4" ry="8" fill="#FF4DA6" transform="rotate(67 200 30)" />
      <ellipse cx="200" cy="22" rx="4" ry="8" fill="#FF4DA6" transform="rotate(112 200 30)" />
      <ellipse cx="200" cy="22" rx="4" ry="8" fill="#FF4DA6" transform="rotate(157 200 30)" />
      <ellipse cx="200" cy="22" rx="4" ry="8" fill="#FF4DA6" transform="rotate(202 200 30)" />
      <ellipse cx="200" cy="22" rx="4" ry="8" fill="#FF4DA6" transform="rotate(247 200 30)" />
      <ellipse cx="200" cy="22" rx="4" ry="8" fill="#FF4DA6" transform="rotate(292 200 30)" />
      <ellipse cx="200" cy="22" rx="4" ry="8" fill="#FF4DA6" transform="rotate(337 200 30)" />
      {/* Center circles */}
      <circle cx="200" cy="30" r="7" fill="#F5C518" />
      <circle cx="200" cy="30" r="4" fill="#E6007E" />
      <circle cx="200" cy="30" r="2" fill="#F5C518" />

      {/* ===== LEFT SIDE ===== */}
      {/* Main vine */}
      <path d="M15 30 Q45 10 75 25 Q105 40 135 22 Q155 14 175 28" stroke="#2D8F4E" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Left small blue multi-petal flower */}
      <ellipse cx="50" cy="13" rx="3" ry="6" fill="#1B5FAA" transform="rotate(0 50 18)" />
      <ellipse cx="50" cy="13" rx="3" ry="6" fill="#2A70C0" transform="rotate(60 50 18)" />
      <ellipse cx="50" cy="13" rx="3" ry="6" fill="#1B5FAA" transform="rotate(120 50 18)" />
      <ellipse cx="50" cy="13" rx="3" ry="6" fill="#2A70C0" transform="rotate(180 50 18)" />
      <ellipse cx="50" cy="13" rx="3" ry="6" fill="#1B5FAA" transform="rotate(240 50 18)" />
      <ellipse cx="50" cy="13" rx="3" ry="6" fill="#2A70C0" transform="rotate(300 50 18)" />
      <circle cx="50" cy="18" r="4" fill="#F5C518" />
      <circle cx="50" cy="18" r="2" fill="#1B5FAA" />

      {/* Left yellow daisy */}
      <ellipse cx="110" cy="35" rx="2.5" ry="5.5" fill="#F5C518" transform="rotate(0 110 40)" />
      <ellipse cx="110" cy="35" rx="2.5" ry="5.5" fill="#E8B600" transform="rotate(45 110 40)" />
      <ellipse cx="110" cy="35" rx="2.5" ry="5.5" fill="#F5C518" transform="rotate(90 110 40)" />
      <ellipse cx="110" cy="35" rx="2.5" ry="5.5" fill="#E8B600" transform="rotate(135 110 40)" />
      <ellipse cx="110" cy="35" rx="2.5" ry="5.5" fill="#F5C518" transform="rotate(180 110 40)" />
      <ellipse cx="110" cy="35" rx="2.5" ry="5.5" fill="#E8B600" transform="rotate(225 110 40)" />
      <ellipse cx="110" cy="35" rx="2.5" ry="5.5" fill="#F5C518" transform="rotate(270 110 40)" />
      <ellipse cx="110" cy="35" rx="2.5" ry="5.5" fill="#E8B600" transform="rotate(315 110 40)" />
      <circle cx="110" cy="40" r="3.5" fill="#E6007E" />
      <circle cx="110" cy="40" r="1.5" fill="#F5C518" />

      {/* Left leaves */}
      <path d="M30 26 Q34 18 38 26" fill="#2D8F4E" />
      <path d="M32 28 Q36 20 40 28" fill="#1E7A3E" opacity="0.7" />
      <path d="M65 22 Q72 14 76 24" fill="#2D8F4E" />
      <path d="M85 32 Q78 24 90 26" fill="#2D8F4E" opacity="0.8" />
      <path d="M130 18 Q136 10 140 20" fill="#2D8F4E" />
      <path d="M150 22 Q145 14 155 18" fill="#1E7A3E" opacity="0.7" />

      {/* Left small buds */}
      <circle cx="25" cy="28" r="2" fill="#E6007E" opacity="0.7" />
      <circle cx="68" cy="14" r="1.5" fill="#FF4DA6" opacity="0.6" />
      <circle cx="155" cy="18" r="1.8" fill="#1B5FAA" opacity="0.5" />

      {/* Left paisley accent */}
      <path d="M85 8 Q92 2 95 10 Q92 16 85 12 Z" fill="#E6007E" opacity="0.4" />
      <path d="M87 9 Q91 5 93 10 Q91 14 87 11 Z" fill="#FF4DA6" opacity="0.3" />

      {/* ===== RIGHT SIDE ===== */}
      {/* Main vine */}
      <path d="M225 28 Q245 14 275 22 Q305 40 335 25 Q355 15 385 30" stroke="#2D8F4E" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Right pink multi-petal flower */}
      <ellipse cx="290" cy="10" rx="3" ry="6.5" fill="#E6007E" transform="rotate(0 290 16)" />
      <ellipse cx="290" cy="10" rx="3" ry="6.5" fill="#D4005E" transform="rotate(51 290 16)" />
      <ellipse cx="290" cy="10" rx="3" ry="6.5" fill="#E6007E" transform="rotate(102 290 16)" />
      <ellipse cx="290" cy="10" rx="3" ry="6.5" fill="#D4005E" transform="rotate(153 290 16)" />
      <ellipse cx="290" cy="10" rx="3" ry="6.5" fill="#E6007E" transform="rotate(204 290 16)" />
      <ellipse cx="290" cy="10" rx="3" ry="6.5" fill="#D4005E" transform="rotate(255 290 16)" />
      <ellipse cx="290" cy="10" rx="3" ry="6.5" fill="#E6007E" transform="rotate(306 290 16)" />
      <circle cx="290" cy="16" r="4" fill="#F5C518" />
      <circle cx="290" cy="16" r="2" fill="#E6007E" />

      {/* Right blue daisy */}
      <ellipse cx="350" cy="34" rx="2.5" ry="5" fill="#1B5FAA" transform="rotate(0 350 38)" />
      <ellipse cx="350" cy="34" rx="2.5" ry="5" fill="#2A70C0" transform="rotate(60 350 38)" />
      <ellipse cx="350" cy="34" rx="2.5" ry="5" fill="#1B5FAA" transform="rotate(120 350 38)" />
      <ellipse cx="350" cy="34" rx="2.5" ry="5" fill="#2A70C0" transform="rotate(180 350 38)" />
      <ellipse cx="350" cy="34" rx="2.5" ry="5" fill="#1B5FAA" transform="rotate(240 350 38)" />
      <ellipse cx="350" cy="34" rx="2.5" ry="5" fill="#2A70C0" transform="rotate(300 350 38)" />
      <circle cx="350" cy="38" r="3" fill="#F5C518" />
      <circle cx="350" cy="38" r="1.5" fill="#1B5FAA" />

      {/* Right leaves */}
      <path d="M240 20 Q246 12 250 22" fill="#2D8F4E" />
      <path d="M260 16 Q255 8 265 12" fill="#1E7A3E" opacity="0.8" />
      <path d="M310 32 Q316 24 320 34" fill="#2D8F4E" />
      <path d="M330 22 Q325 14 335 18" fill="#2D8F4E" opacity="0.7" />
      <path d="M370 26 Q376 18 380 28" fill="#1E7A3E" opacity="0.7" />

      {/* Right small buds */}
      <circle cx="245" cy="18" r="1.8" fill="#F5C518" opacity="0.6" />
      <circle cx="335" cy="16" r="2" fill="#E6007E" opacity="0.5" />
      <circle cx="375" cy="24" r="1.5" fill="#1B5FAA" opacity="0.6" />

      {/* Right paisley accent */}
      <path d="M315 6 Q322 0 325 8 Q322 14 315 10 Z" fill="#1B5FAA" opacity="0.35" />
      <path d="M317 7 Q321 3 323 8 Q321 13 317 10 Z" fill="#2A70C0" opacity="0.25" />
    </svg>
  )
}

export function FloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={`w-32 h-32 md:w-40 md:h-40 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ===== LARGE ROSA MEXICANO FLOWER ===== */}
      {/* Outer petals */}
      <ellipse cx="40" cy="18" rx="8" ry="18" fill="#E6007E" transform="rotate(0 40 36)" />
      <ellipse cx="40" cy="18" rx="8" ry="18" fill="#D4005E" transform="rotate(45 40 36)" />
      <ellipse cx="40" cy="18" rx="8" ry="18" fill="#E6007E" transform="rotate(90 40 36)" />
      <ellipse cx="40" cy="18" rx="8" ry="18" fill="#D4005E" transform="rotate(135 40 36)" />
      <ellipse cx="40" cy="18" rx="8" ry="18" fill="#E6007E" transform="rotate(180 40 36)" />
      <ellipse cx="40" cy="18" rx="8" ry="18" fill="#D4005E" transform="rotate(225 40 36)" />
      <ellipse cx="40" cy="18" rx="8" ry="18" fill="#E6007E" transform="rotate(270 40 36)" />
      <ellipse cx="40" cy="18" rx="8" ry="18" fill="#D4005E" transform="rotate(315 40 36)" />
      {/* Inner petals */}
      <ellipse cx="40" cy="24" rx="5" ry="11" fill="#FF4DA6" transform="rotate(22 40 36)" />
      <ellipse cx="40" cy="24" rx="5" ry="11" fill="#FF6BB5" transform="rotate(67 40 36)" />
      <ellipse cx="40" cy="24" rx="5" ry="11" fill="#FF4DA6" transform="rotate(112 40 36)" />
      <ellipse cx="40" cy="24" rx="5" ry="11" fill="#FF6BB5" transform="rotate(157 40 36)" />
      <ellipse cx="40" cy="24" rx="5" ry="11" fill="#FF4DA6" transform="rotate(202 40 36)" />
      <ellipse cx="40" cy="24" rx="5" ry="11" fill="#FF6BB5" transform="rotate(247 40 36)" />
      <ellipse cx="40" cy="24" rx="5" ry="11" fill="#FF4DA6" transform="rotate(292 40 36)" />
      <ellipse cx="40" cy="24" rx="5" ry="11" fill="#FF6BB5" transform="rotate(337 40 36)" />
      {/* Center */}
      <circle cx="40" cy="36" r="10" fill="#F5C518" />
      <circle cx="40" cy="36" r="6" fill="#E8B600" />
      <circle cx="40" cy="36" r="3" fill="#E6007E" />
      {/* Petal detail dots */}
      <circle cx="40" cy="19" r="1.2" fill="#fff" opacity="0.4" />
      <circle cx="53" cy="23" r="1.2" fill="#fff" opacity="0.4" />
      <circle cx="27" cy="23" r="1.2" fill="#fff" opacity="0.4" />

      {/* ===== BLUE TALAVERA FLOWER ===== */}
      <ellipse cx="90" cy="5" rx="5" ry="11" fill="#1B5FAA" transform="rotate(0 90 16)" />
      <ellipse cx="90" cy="5" rx="5" ry="11" fill="#2A70C0" transform="rotate(60 90 16)" />
      <ellipse cx="90" cy="5" rx="5" ry="11" fill="#1B5FAA" transform="rotate(120 90 16)" />
      <ellipse cx="90" cy="5" rx="5" ry="11" fill="#2A70C0" transform="rotate(180 90 16)" />
      <ellipse cx="90" cy="5" rx="5" ry="11" fill="#1B5FAA" transform="rotate(240 90 16)" />
      <ellipse cx="90" cy="5" rx="5" ry="11" fill="#2A70C0" transform="rotate(300 90 16)" />
      <circle cx="90" cy="16" r="6" fill="#F5C518" />
      <circle cx="90" cy="16" r="3" fill="#1B5FAA" />
      <circle cx="90" cy="16" r="1.5" fill="#F5C518" />

      {/* ===== YELLOW FLOWER ===== */}
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#F5C518" transform="rotate(0 100 62)" />
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#E8B600" transform="rotate(40 100 62)" />
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#F5C518" transform="rotate(80 100 62)" />
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#E8B600" transform="rotate(120 100 62)" />
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#F5C518" transform="rotate(160 100 62)" />
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#E8B600" transform="rotate(200 100 62)" />
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#F5C518" transform="rotate(240 100 62)" />
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#E8B600" transform="rotate(280 100 62)" />
      <ellipse cx="100" cy="52" rx="5" ry="10" fill="#F5C518" transform="rotate(320 100 62)" />
      <circle cx="100" cy="62" r="6" fill="#E6007E" />
      <circle cx="100" cy="62" r="3" fill="#F5C518" />

      {/* ===== SMALL PURPLE/BLUE FLOWER ===== */}
      <ellipse cx="130" cy="28" rx="3" ry="6" fill="#7B4FA2" transform="rotate(0 130 34)" />
      <ellipse cx="130" cy="28" rx="3" ry="6" fill="#9B6FC2" transform="rotate(72 130 34)" />
      <ellipse cx="130" cy="28" rx="3" ry="6" fill="#7B4FA2" transform="rotate(144 130 34)" />
      <ellipse cx="130" cy="28" rx="3" ry="6" fill="#9B6FC2" transform="rotate(216 130 34)" />
      <ellipse cx="130" cy="28" rx="3" ry="6" fill="#7B4FA2" transform="rotate(288 130 34)" />
      <circle cx="130" cy="34" r="3.5" fill="#F5C518" />
      <circle cx="130" cy="34" r="1.5" fill="#7B4FA2" />

      {/* ===== VINE CURVES ===== */}
      <path d="M55 46 Q70 55 65 75 Q58 95 72 110 Q80 120 75 140" stroke="#2D8F4E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M108 72 Q118 82 115 100 Q112 115 120 130 Q126 140 122 155" stroke="#2D8F4E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M18 55 Q25 70 20 85 Q15 100 25 115" stroke="#1E7A3E" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ===== DETAILED LEAVES ===== */}
      {/* Leaf with center vein */}
      <path d="M58 60 Q66 52 72 62 Q66 68 58 60 Z" fill="#2D8F4E" />
      <path d="M60 60 L70 61" stroke="#1E7A3E" strokeWidth="0.5" />
      <path d="M52 80 Q44 72 50 66 Q56 72 52 80 Z" fill="#1E7A3E" opacity="0.8" />
      <path d="M70 90 Q78 82 84 92 Q78 98 70 90 Z" fill="#2D8F4E" />
      <path d="M72 90 L82 91" stroke="#1E7A3E" strokeWidth="0.5" />
      <path d="M60 110 Q52 102 58 96 Q64 102 60 110 Z" fill="#2D8F4E" opacity="0.85" />
      <path d="M80 118 Q88 110 94 120 Q88 126 80 118 Z" fill="#1E7A3E" />
      <path d="M65 130 Q57 122 63 116 Q69 122 65 130 Z" fill="#2D8F4E" opacity="0.7" />
      {/* Right vine leaves */}
      <path d="M115 85 Q123 77 128 88 Q122 94 115 85 Z" fill="#2D8F4E" />
      <path d="M108 105 Q100 97 106 91 Q112 97 108 105 Z" fill="#1E7A3E" opacity="0.8" />
      <path d="M125 120 Q133 112 138 122 Q132 128 125 120 Z" fill="#2D8F4E" opacity="0.75" />
      {/* Left vine leaves */}
      <path d="M14 68 Q8 60 16 56 Q22 62 14 68 Z" fill="#2D8F4E" opacity="0.7" />
      <path d="M22 92 Q28 84 34 92 Q28 98 22 92 Z" fill="#1E7A3E" opacity="0.6" />

      {/* ===== PAISLEY SHAPES ===== */}
      <path d="M10 30 Q22 15 30 28 Q22 42 10 34 Z" fill="#E6007E" opacity="0.25" />
      <path d="M13 31 Q20 21 26 30 Q20 38 13 33 Z" fill="#FF4DA6" opacity="0.2" />
      <circle cx="18" cy="31" r="1.5" fill="#E6007E" opacity="0.3" />

      <path d="M135 75 Q148 62 152 78 Q145 90 135 80 Z" fill="#1B5FAA" opacity="0.2" />
      <path d="M138 76 Q146 67 149 78 Q145 86 138 80 Z" fill="#2A70C0" opacity="0.15" />

      {/* ===== SMALL BUDS & BERRIES ===== */}
      <circle cx="15" cy="45" r="2.5" fill="#E6007E" opacity="0.5" />
      <circle cx="18" cy="42" r="2" fill="#FF4DA6" opacity="0.4" />
      <path d="M15 47 L15 52" stroke="#2D8F4E" strokeWidth="1" />

      <circle cx="140" cy="50" r="2" fill="#F5C518" opacity="0.6" />
      <circle cx="143" cy="47" r="1.5" fill="#E8B600" opacity="0.5" />
      <path d="M141 52 L141 56" stroke="#2D8F4E" strokeWidth="1" />

      <circle cx="90" cy="100" r="2" fill="#E6007E" opacity="0.4" />
      <circle cx="45" cy="100" r="1.5" fill="#1B5FAA" opacity="0.4" />
      <circle cx="105" cy="140" r="2" fill="#F5C518" opacity="0.5" />
      <circle cx="30" cy="125" r="1.5" fill="#E6007E" opacity="0.3" />

      {/* ===== SMALL BUTTERFLY ===== */}
      <path d="M140 10 Q148 2 150 10 Q148 14 140 10 Z" fill="#E6007E" opacity="0.5" />
      <path d="M150 10 Q158 2 156 10 Q158 14 150 10 Z" fill="#FF4DA6" opacity="0.4" />
      <line x1="148" y1="8" x2="150" y2="14" stroke="#333" strokeWidth="0.5" />
    </svg>
  )
}

export function SmallFlower({ color = "#E6007E", className = "" }: { color?: string; className?: string }) {
  const lighterColor = color === "#E6007E" ? "#FF4DA6"
    : color === "#1B5FAA" ? "#2A70C0"
    : color === "#E8B600" ? "#F5C518"
    : color === "#2D8F4E" ? "#3DAF5E"
    : color

  return (
    <svg
      viewBox="0 0 36 36"
      className={`w-6 h-6 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer petals */}
      <ellipse cx="18" cy="10" rx="3.5" ry="7" fill={color} transform="rotate(0 18 18)" />
      <ellipse cx="18" cy="10" rx="3.5" ry="7" fill={lighterColor} transform="rotate(45 18 18)" />
      <ellipse cx="18" cy="10" rx="3.5" ry="7" fill={color} transform="rotate(90 18 18)" />
      <ellipse cx="18" cy="10" rx="3.5" ry="7" fill={lighterColor} transform="rotate(135 18 18)" />
      <ellipse cx="18" cy="10" rx="3.5" ry="7" fill={color} transform="rotate(180 18 18)" />
      <ellipse cx="18" cy="10" rx="3.5" ry="7" fill={lighterColor} transform="rotate(225 18 18)" />
      <ellipse cx="18" cy="10" rx="3.5" ry="7" fill={color} transform="rotate(270 18 18)" />
      <ellipse cx="18" cy="10" rx="3.5" ry="7" fill={lighterColor} transform="rotate(315 18 18)" />
      {/* Center */}
      <circle cx="18" cy="18" r="4.5" fill="#F5C518" />
      <circle cx="18" cy="18" r="2.5" fill={color} />
      <circle cx="18" cy="18" r="1" fill="#F5C518" />
      {/* Highlight dots */}
      <circle cx="18" cy="11" r="0.8" fill="#fff" opacity="0.35" />
      <circle cx="12" cy="15" r="0.8" fill="#fff" opacity="0.35" />
    </svg>
  )
}

export function FloralBorderStrip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 600"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* Continuous vine */}
      <path d="M20 0 Q35 40 20 80 Q5 120 20 160 Q35 200 20 240 Q5 280 20 320 Q35 360 20 400 Q5 440 20 480 Q35 520 20 560 Q10 580 20 600" stroke="#2D8F4E" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Flower at y=60 - Rosa */}
      <ellipse cx="24" cy="48" rx="4" ry="8" fill="#E6007E" transform="rotate(0 24 56)" />
      <ellipse cx="24" cy="48" rx="4" ry="8" fill="#D4005E" transform="rotate(72 24 56)" />
      <ellipse cx="24" cy="48" rx="4" ry="8" fill="#E6007E" transform="rotate(144 24 56)" />
      <ellipse cx="24" cy="48" rx="4" ry="8" fill="#D4005E" transform="rotate(216 24 56)" />
      <ellipse cx="24" cy="48" rx="4" ry="8" fill="#E6007E" transform="rotate(288 24 56)" />
      <circle cx="24" cy="56" r="5" fill="#F5C518" />
      <circle cx="24" cy="56" r="2.5" fill="#E6007E" />

      {/* Leaves around y=60 */}
      <path d="M12 44 Q6 36 14 34 Q18 40 12 44 Z" fill="#2D8F4E" />
      <path d="M34 68 Q40 60 36 54 Q30 60 34 68 Z" fill="#1E7A3E" opacity="0.8" />

      {/* Flower at y=160 - Blue */}
      <ellipse cx="16" cy="150" rx="3.5" ry="7" fill="#1B5FAA" transform="rotate(0 16 156)" />
      <ellipse cx="16" cy="150" rx="3.5" ry="7" fill="#2A70C0" transform="rotate(60 16 156)" />
      <ellipse cx="16" cy="150" rx="3.5" ry="7" fill="#1B5FAA" transform="rotate(120 16 156)" />
      <ellipse cx="16" cy="150" rx="3.5" ry="7" fill="#2A70C0" transform="rotate(180 16 156)" />
      <ellipse cx="16" cy="150" rx="3.5" ry="7" fill="#1B5FAA" transform="rotate(240 16 156)" />
      <ellipse cx="16" cy="150" rx="3.5" ry="7" fill="#2A70C0" transform="rotate(300 16 156)" />
      <circle cx="16" cy="156" r="4" fill="#F5C518" />
      <circle cx="16" cy="156" r="2" fill="#1B5FAA" />

      {/* Leaves around y=160 */}
      <path d="M28 148 Q34 140 30 134 Q24 140 28 148 Z" fill="#2D8F4E" />
      <path d="M8 168 Q2 160 10 158 Q14 164 8 168 Z" fill="#1E7A3E" opacity="0.7" />

      {/* Flower at y=260 - Yellow */}
      <ellipse cx="26" cy="250" rx="4" ry="8" fill="#F5C518" transform="rotate(0 26 258)" />
      <ellipse cx="26" cy="250" rx="4" ry="8" fill="#E8B600" transform="rotate(45 26 258)" />
      <ellipse cx="26" cy="250" rx="4" ry="8" fill="#F5C518" transform="rotate(90 26 258)" />
      <ellipse cx="26" cy="250" rx="4" ry="8" fill="#E8B600" transform="rotate(135 26 258)" />
      <ellipse cx="26" cy="250" rx="4" ry="8" fill="#F5C518" transform="rotate(180 26 258)" />
      <ellipse cx="26" cy="250" rx="4" ry="8" fill="#E8B600" transform="rotate(225 26 258)" />
      <ellipse cx="26" cy="250" rx="4" ry="8" fill="#F5C518" transform="rotate(270 26 258)" />
      <ellipse cx="26" cy="250" rx="4" ry="8" fill="#E8B600" transform="rotate(315 26 258)" />
      <circle cx="26" cy="258" r="5" fill="#E6007E" />
      <circle cx="26" cy="258" r="2.5" fill="#F5C518" />

      {/* Leaves around y=260 */}
      <path d="M12 248 Q6 240 14 238 Q18 244 12 248 Z" fill="#2D8F4E" />
      <path d="M36 270 Q40 262 34 258 Q30 264 36 270 Z" fill="#1E7A3E" opacity="0.8" />

      {/* Paisley at y=200 */}
      <path d="M30 195 Q38 185 38 200 Q34 210 30 202 Z" fill="#E6007E" opacity="0.25" />
      <path d="M32 197 Q36 190 36 200 Q34 206 32 201 Z" fill="#FF4DA6" opacity="0.2" />

      {/* Small flower at y=350 - Rosa */}
      <ellipse cx="18" cy="342" rx="3" ry="6" fill="#E6007E" transform="rotate(0 18 348)" />
      <ellipse cx="18" cy="342" rx="3" ry="6" fill="#FF4DA6" transform="rotate(72 18 348)" />
      <ellipse cx="18" cy="342" rx="3" ry="6" fill="#E6007E" transform="rotate(144 18 348)" />
      <ellipse cx="18" cy="342" rx="3" ry="6" fill="#FF4DA6" transform="rotate(216 18 348)" />
      <ellipse cx="18" cy="342" rx="3" ry="6" fill="#E6007E" transform="rotate(288 18 348)" />
      <circle cx="18" cy="348" r="3.5" fill="#F5C518" />
      <circle cx="18" cy="348" r="1.5" fill="#E6007E" />

      {/* Flower at y=450 - Purple */}
      <ellipse cx="22" cy="440" rx="3.5" ry="7" fill="#7B4FA2" transform="rotate(0 22 446)" />
      <ellipse cx="22" cy="440" rx="3.5" ry="7" fill="#9B6FC2" transform="rotate(72 22 446)" />
      <ellipse cx="22" cy="440" rx="3.5" ry="7" fill="#7B4FA2" transform="rotate(144 22 446)" />
      <ellipse cx="22" cy="440" rx="3.5" ry="7" fill="#9B6FC2" transform="rotate(216 22 446)" />
      <ellipse cx="22" cy="440" rx="3.5" ry="7" fill="#7B4FA2" transform="rotate(288 22 446)" />
      <circle cx="22" cy="446" r="4" fill="#F5C518" />
      <circle cx="22" cy="446" r="2" fill="#7B4FA2" />

      {/* Leaves around y=350 & 450 */}
      <path d="M8 338 Q2 330 10 328 Q14 334 8 338 Z" fill="#2D8F4E" />
      <path d="M28 358 Q34 350 30 344 Q24 350 28 358 Z" fill="#1E7A3E" opacity="0.7" />
      <path d="M10 440 Q4 432 12 430 Q16 436 10 440 Z" fill="#2D8F4E" />
      <path d="M32 458 Q38 450 34 444 Q28 450 32 458 Z" fill="#1E7A3E" opacity="0.8" />

      {/* Flower at y=540 - Blue small */}
      <ellipse cx="16" cy="532" rx="3" ry="6" fill="#1B5FAA" transform="rotate(0 16 538)" />
      <ellipse cx="16" cy="532" rx="3" ry="6" fill="#2A70C0" transform="rotate(60 16 538)" />
      <ellipse cx="16" cy="532" rx="3" ry="6" fill="#1B5FAA" transform="rotate(120 16 538)" />
      <ellipse cx="16" cy="532" rx="3" ry="6" fill="#2A70C0" transform="rotate(180 16 538)" />
      <ellipse cx="16" cy="532" rx="3" ry="6" fill="#1B5FAA" transform="rotate(240 16 538)" />
      <ellipse cx="16" cy="532" rx="3" ry="6" fill="#2A70C0" transform="rotate(300 16 538)" />
      <circle cx="16" cy="538" r="3" fill="#F5C518" />
      <circle cx="16" cy="538" r="1.5" fill="#1B5FAA" />

      {/* Scattered leaves along the vine */}
      <path d="M28 110 Q34 102 30 96 Q24 102 28 110 Z" fill="#2D8F4E" opacity="0.7" />
      <path d="M10 120 Q4 112 12 110 Q16 116 10 120 Z" fill="#1E7A3E" opacity="0.6" />
      <path d="M30 300 Q36 292 32 286 Q26 292 30 300 Z" fill="#2D8F4E" opacity="0.7" />
      <path d="M10 310 Q4 302 12 300 Q16 306 10 310 Z" fill="#1E7A3E" opacity="0.6" />
      <path d="M28 400 Q34 392 30 386 Q24 392 28 400 Z" fill="#2D8F4E" opacity="0.7" />
      <path d="M10 410 Q4 402 12 400 Q16 406 10 410 Z" fill="#1E7A3E" opacity="0.6" />
      <path d="M28 500 Q34 492 30 486 Q24 492 28 500 Z" fill="#2D8F4E" opacity="0.7" />
      <path d="M10 510 Q4 502 12 500 Q16 506 10 510 Z" fill="#1E7A3E" opacity="0.6" />
      <path d="M26 570 Q32 562 28 556 Q22 562 26 570 Z" fill="#2D8F4E" opacity="0.7" />

      {/* Small buds/berries */}
      <circle cx="32" cy="30" r="2" fill="#E6007E" opacity="0.4" />
      <circle cx="8" cy="90" r="1.5" fill="#F5C518" opacity="0.5" />
      <circle cx="32" cy="215" r="2" fill="#1B5FAA" opacity="0.3" />
      <circle cx="6" cy="370" r="1.5" fill="#E6007E" opacity="0.4" />
      <circle cx="34" cy="480" r="2" fill="#F5C518" opacity="0.4" />
      <circle cx="8" cy="560" r="1.5" fill="#E6007E" opacity="0.3" />
    </svg>
  )
}
