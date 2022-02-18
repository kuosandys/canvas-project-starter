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

export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomChoice(weight = 0.5): 1 | -1 {
  return Math.random() > weight ? 1 : -1;
}

/**
 * Get an array of random angles that divide a circle into
 * the number of specified slices
 * @param slices number
 */
export function getRandomAngles(slices: number): number[] {
  const angles: number[] = new Array(slices);

  for (let i = 0; i < angles.length; i++) {
    angles[i] =
      (Math.random() * (Math.PI * 2)) / slices + (Math.PI * 2 * i) / slices;
  }

  return angles;
}
