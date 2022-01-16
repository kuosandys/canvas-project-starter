import { logContextNotFoundError } from './utils/helpers';

export default function draw(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    logContextNotFoundError();
    return;
  }

  // Go wild.
}
