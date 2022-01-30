import { IColour } from '../types';

/**
 * "Sleep" for given milliseconds
 * @param {number} ms
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Clear the entire canvas
 * @param canvas
 */
export function clear(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    logContextNotFoundError();
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function logContextNotFoundError() {
  console.log('Unable to get context');
}

export function toHSL(colour: IColour) {
  return `hsl(${colour.h}, ${colour.s}%, ${colour.l}%)`;
}
