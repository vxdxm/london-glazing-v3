
import React from 'react';
import { getSpriteStyles, SpritePosition } from '@/lib/sprite-utils';

interface SpriteIconProps {
  spriteName: string;
  spriteSheet: string;
  spriteMap: Record<string, SpritePosition>;
  className?: string;
  alt?: string;
}

export function SpriteIcon({
  spriteName,
  spriteSheet,
  spriteMap,
  className = '',
  alt = '',
}: SpriteIconProps) {
  const spriteStyles = getSpriteStyles(spriteName, spriteMap, spriteSheet);
  
  return (
    <span
      className={className}
      style={spriteStyles}
      role="img"
      aria-label={alt || spriteName}
      title={alt || spriteName}
    />
  );
}
