
export interface SpritePosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SpriteMap {
  [key: string]: SpritePosition;
}

/**
 * Gets CSS properties for a sprite from a sprite sheet
 * @param spriteName The name of the sprite in the sprite map
 * @param spriteMap The mapping of sprite names to positions
 * @param spriteSheetUrl The URL of the sprite sheet image
 * @returns CSS properties for background-image, background-position, etc.
 */
export function getSpriteStyles(
  spriteName: string, 
  spriteMap: SpriteMap, 
  spriteSheetUrl: string
): React.CSSProperties {
  const sprite = spriteMap[spriteName];
  
  if (!sprite) {
    console.error(`Sprite "${spriteName}" not found in sprite map`);
    return {};
  }
  
  return {
    backgroundImage: `url(${spriteSheetUrl})`,
    backgroundPosition: `-${sprite.x}px -${sprite.y}px`,
    backgroundRepeat: 'no-repeat',
    width: `${sprite.width}px`,
    height: `${sprite.height}px`,
    display: 'inline-block',
  };
}
