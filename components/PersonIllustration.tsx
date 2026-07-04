export function PersonIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="170" cy="185" r="155" fill="#FDE3CE" />
      <ellipse cx="170" cy="372" rx="95" ry="14" fill="#171F3D" opacity="0.08" />
      <path
        d="M95,300 Q100,355 150,362 Q170,365 190,358 Q230,350 245,300 L230,290 Q210,330 170,335 Q130,330 110,290 Z"
        fill="#171F3D"
      />
      <rect x="110" y="205" width="120" height="115" rx="45" fill="#F18A3C" />
      <path
        d="M118,225 Q95,250 108,285 Q112,295 128,292 L140,270 Q125,255 130,232 Z"
        fill="#F18A3C"
      />
      <path
        d="M222,225 Q245,250 232,285 Q228,295 212,292 L200,270 Q215,255 210,232 Z"
        fill="#F18A3C"
      />
      <circle cx="112" cy="288" r="12" fill="#F2C6A0" />
      <circle cx="228" cy="288" r="12" fill="#F2C6A0" />
      <rect
        x="128"
        y="268"
        width="84"
        height="58"
        rx="8"
        fill="#FFFFFF"
        stroke="#171F3D"
        strokeWidth="2"
      />
      <rect x="136" y="276" width="68" height="42" rx="4" fill="#B1E1E2" />
      <rect x="155" y="150" width="30" height="30" fill="#F2C6A0" />
      <ellipse cx="170" cy="110" rx="72" ry="76" fill="#171F3D" />
      <circle cx="170" cy="120" r="52" fill="#F2C6A0" />
      <path
        d="M118,110 Q120,60 170,58 Q220,60 222,110 Q222,80 170,80 Q118,80 118,110 Z"
        fill="#171F3D"
      />
      <path
        d="M118,105 Q108,150 122,185 Q130,190 132,178 Q120,150 126,110 Z"
        fill="#171F3D"
      />
      <path
        d="M222,105 Q232,150 218,185 Q210,190 208,178 Q220,150 214,110 Z"
        fill="#171F3D"
      />
      <circle cx="118" cy="122" r="8" fill="#F2C6A0" />
      <circle cx="222" cy="122" r="8" fill="#F2C6A0" />
      <circle cx="153" cy="122" r="4.5" fill="#171F3D" />
      <circle cx="187" cy="122" r="4.5" fill="#171F3D" />
      <path
        d="M155,140 Q170,150 185,140"
        stroke="#171F3D"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="140" cy="132" r="7" fill="#F18A3C" opacity="0.35" />
      <circle cx="200" cy="132" r="7" fill="#F18A3C" opacity="0.35" />
      <g transform="translate(255,300)">
        <rect x="-14" y="20" width="28" height="26" rx="6" fill="#3FA79B" />
        <path d="M0,20 Q-14,0 -4,-12 Q4,0 0,20 Z" fill="#3FA79B" />
        <path d="M0,20 Q14,-4 8,-18 Q-2,-6 0,20 Z" fill="#B1E1E2" />
      </g>
    </svg>
  );
}
