import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const FixedPanelIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>
      {`
        .fixed-frame { stroke: currentColor; stroke-width: 2; fill: none; }
        .fixed-glass { fill: hsl(var(--primary) / 0.15); }
        .fixed-shine {
          stroke: hsl(var(--primary) / 0.6);
          stroke-width: 1.5;
          stroke-linecap: round;
          animation: shimmer 2s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}
    </style>
    <rect x="6" y="6" width="36" height="36" rx="2" className="fixed-frame" />
    <rect x="10" y="10" width="28" height="28" className="fixed-glass" />
    <line x1="14" y1="14" x2="20" y2="20" className="fixed-shine" />
    <line x1="14" y1="18" x2="18" y2="22" className="fixed-shine" style={{ animationDelay: '0.2s' }} />
    <rect x="6" y="6" width="36" height="36" rx="2" className="fixed-frame" />
    <line x1="6" y1="24" x2="42" y2="24" className="fixed-frame" />
    <line x1="24" y1="6" x2="24" y2="42" className="fixed-frame" />
  </svg>
);

export const HingedPanelIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>
      {`
        .hinged-frame { stroke: currentColor; stroke-width: 2; fill: none; }
        .hinged-glass { fill: hsl(var(--primary) / 0.15); }
        .hinged-panel {
          fill: hsl(var(--primary) / 0.2);
          stroke: currentColor;
          stroke-width: 1.5;
          transform-origin: 8px 24px;
          animation: swing 3s ease-in-out infinite;
        }
        .hinged-hinge { fill: currentColor; }
        @keyframes swing {
          0%, 100% { transform: perspective(100px) rotateY(0deg); }
          50% { transform: perspective(100px) rotateY(-25deg); }
        }
      `}
    </style>
    <rect x="6" y="6" width="36" height="36" rx="2" className="hinged-frame" />
    <rect x="10" y="10" width="28" height="28" className="hinged-glass" />
    <rect x="8" y="10" width="14" height="28" rx="1" className="hinged-panel" />
    <circle cx="10" cy="16" r="2" className="hinged-hinge" />
    <circle cx="10" cy="32" r="2" className="hinged-hinge" />
    <path d="M36 22 L40 24 L36 26" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
  </svg>
);

export const VerticalSlidingIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>
      {`
        .vs-frame { stroke: currentColor; stroke-width: 2; fill: none; }
        .vs-glass-bottom { fill: hsl(var(--primary) / 0.1); }
        .vs-glass-top {
          fill: hsl(var(--primary) / 0.25);
          stroke: currentColor;
          stroke-width: 1.5;
          animation: slideUp 2.5s ease-in-out infinite;
        }
        .vs-arrow {
          stroke: currentColor;
          stroke-width: 1.5;
          fill: none;
          animation: arrowBounce 2.5s ease-in-out infinite;
        }
        @keyframes slideUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes arrowBounce {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-4px); }
        }
      `}
    </style>
    <rect x="6" y="6" width="36" height="36" rx="2" className="vs-frame" />
    <rect x="10" y="24" width="28" height="14" className="vs-glass-bottom" />
    <rect x="10" y="10" width="28" height="16" className="vs-glass-top" />
    <path d="M24 30 L20 34 M24 30 L28 34" className="vs-arrow" />
    <path d="M24 36 L20 40 M24 36 L28 40" className="vs-arrow" style={{ animationDelay: '0.15s' }} />
  </svg>
);

export const HorizontalSlidingIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>
      {`
        .hs-frame { stroke: currentColor; stroke-width: 2; fill: none; }
        .hs-glass-left { fill: hsl(var(--primary) / 0.1); }
        .hs-glass-right {
          fill: hsl(var(--primary) / 0.25);
          stroke: currentColor;
          stroke-width: 1.5;
          animation: slideRight 2.5s ease-in-out infinite;
        }
        .hs-arrow {
          stroke: currentColor;
          stroke-width: 1.5;
          fill: none;
          animation: arrowSlide 2.5s ease-in-out infinite;
        }
        @keyframes slideRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
        @keyframes arrowSlide {
          0%, 100% { opacity: 0.4; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(3px); }
        }
      `}
    </style>
    <rect x="6" y="6" width="36" height="36" rx="2" className="hs-frame" />
    <rect x="10" y="10" width="14" height="28" className="hs-glass-left" />
    <rect x="22" y="10" width="16" height="28" className="hs-glass-right" />
    <path d="M32 24 L36 20 M32 24 L36 28" className="hs-arrow" />
    <path d="M36 24 L40 20 M36 24 L40 28" className="hs-arrow" style={{ animationDelay: '0.15s' }} />
  </svg>
);

export const LiftOutIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>
      {`
        .lo-frame { stroke: currentColor; stroke-width: 2; fill: none; }
        .lo-glass {
          fill: hsl(var(--primary) / 0.2);
          stroke: currentColor;
          stroke-width: 1.5;
          animation: liftOut 3s ease-in-out infinite;
        }
        .lo-arrow {
          stroke: currentColor;
          stroke-width: 1.5;
          fill: none;
          animation: liftArrow 3s ease-in-out infinite;
        }
        .lo-hand {
          stroke: currentColor;
          stroke-width: 1.5;
          fill: none;
          animation: liftHand 3s ease-in-out infinite;
        }
        @keyframes liftOut {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(0, -6px) rotate(0deg); }
          60% { transform: translate(8px, -10px) rotate(15deg); }
        }
        @keyframes liftArrow {
          0%, 100% { opacity: 0.3; }
          30%, 60% { opacity: 1; }
        }
        @keyframes liftHand {
          0%, 100% { opacity: 0; transform: translate(0, 0); }
          30%, 60% { opacity: 1; transform: translate(4px, -4px); }
        }
      `}
    </style>
    <rect x="6" y="10" width="32" height="32" rx="2" className="lo-frame" />
    <rect x="10" y="14" width="24" height="24" className="lo-glass" />
    <path d="M34 8 L34 2 L40 2" className="lo-arrow" />
    <path d="M30 6 L30 4" className="lo-hand" />
    <path d="M32 6 L32 2" className="lo-hand" />
    <path d="M34 6 L34 3" className="lo-hand" />
  </svg>
);

export const MagneticIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>
      {`
        .mag-frame { stroke: currentColor; stroke-width: 2; fill: none; }
        .mag-glass { fill: hsl(var(--primary) / 0.15); stroke: currentColor; stroke-width: 1.5; }
        .mag-strip {
          fill: hsl(var(--primary));
          animation: magnetPulse 1.5s ease-in-out infinite;
        }
        .mag-field {
          stroke: hsl(var(--primary) / 0.5);
          stroke-width: 1;
          fill: none;
          animation: fieldWave 2s ease-in-out infinite;
        }
        @keyframes magnetPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes fieldWave {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
      `}
    </style>
    <rect x="8" y="8" width="32" height="32" rx="2" className="mag-frame" />
    <rect x="12" y="12" width="24" height="24" className="mag-glass" />
    <rect x="8" y="10" width="3" height="8" rx="1" className="mag-strip" />
    <rect x="8" y="30" width="3" height="8" rx="1" className="mag-strip" style={{ animationDelay: '0.2s' }} />
    <rect x="37" y="10" width="3" height="8" rx="1" className="mag-strip" style={{ animationDelay: '0.4s' }} />
    <rect x="37" y="30" width="3" height="8" rx="1" className="mag-strip" style={{ animationDelay: '0.6s' }} />
    <path d="M6 14 Q4 24 6 34" className="mag-field" />
    <path d="M42 14 Q44 24 42 34" className="mag-field" style={{ animationDelay: '0.3s' }} />
  </svg>
);

export const TiltTurnIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>
      {`
        .tt-frame { stroke: currentColor; stroke-width: 2; fill: none; }
        .tt-glass { fill: hsl(var(--primary) / 0.15); }
        .tt-panel {
          fill: hsl(var(--primary) / 0.2);
          stroke: currentColor;
          stroke-width: 1.5;
          transform-origin: 24px 38px;
          animation: tiltTurn 4s ease-in-out infinite;
        }
        .tt-handle {
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          animation: handleTurn 4s ease-in-out infinite;
        }
        @keyframes tiltTurn {
          0%, 25% { transform: perspective(100px) rotateX(0deg); }
          35%, 65% { transform: perspective(100px) rotateX(-20deg); }
          75%, 100% { transform: perspective(100px) rotateX(0deg); }
        }
        @keyframes handleTurn {
          0%, 20% { transform: rotate(0deg); transform-origin: 36px 24px; }
          25%, 30% { transform: rotate(90deg); transform-origin: 36px 24px; }
          70%, 75% { transform: rotate(90deg); transform-origin: 36px 24px; }
          80%, 100% { transform: rotate(0deg); transform-origin: 36px 24px; }
        }
      `}
    </style>
    <rect x="6" y="6" width="36" height="36" rx="2" className="tt-frame" />
    <rect x="10" y="10" width="28" height="28" className="tt-glass" />
    <rect x="10" y="10" width="28" height="28" className="tt-panel" />
    <line x1="36" y1="20" x2="36" y2="28" className="tt-handle" />
  </svg>
);

export const CasementIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>
      {`
        .cas-frame { stroke: currentColor; stroke-width: 2; fill: none; }
        .cas-glass { fill: hsl(var(--primary) / 0.15); }
        .cas-panel-left {
          fill: hsl(var(--primary) / 0.2);
          stroke: currentColor;
          stroke-width: 1.5;
          transform-origin: 10px 24px;
          animation: casementLeft 3.5s ease-in-out infinite;
        }
        .cas-panel-right {
          fill: hsl(var(--primary) / 0.2);
          stroke: currentColor;
          stroke-width: 1.5;
          transform-origin: 38px 24px;
          animation: casementRight 3.5s ease-in-out infinite;
        }
        @keyframes casementLeft {
          0%, 100% { transform: perspective(100px) rotateY(0deg); }
          50% { transform: perspective(100px) rotateY(20deg); }
        }
        @keyframes casementRight {
          0%, 100% { transform: perspective(100px) rotateY(0deg); }
          50% { transform: perspective(100px) rotateY(-20deg); }
        }
      `}
    </style>
    <rect x="6" y="6" width="36" height="36" rx="2" className="cas-frame" />
    <rect x="10" y="10" width="28" height="28" className="cas-glass" />
    <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="10" width="14" height="28" className="cas-panel-left" />
    <rect x="24" y="10" width="14" height="28" className="cas-panel-right" />
  </svg>
);

// Export all icons as a map for easy access
export const GlazingTypeIconMap = {
  fixed: FixedPanelIcon,
  hinged: HingedPanelIcon,
  verticalSliding: VerticalSlidingIcon,
  horizontalSliding: HorizontalSlidingIcon,
  liftOut: LiftOutIcon,
  magnetic: MagneticIcon,
  tiltTurn: TiltTurnIcon,
  casement: CasementIcon,
};

export type GlazingIconType = keyof typeof GlazingTypeIconMap;
