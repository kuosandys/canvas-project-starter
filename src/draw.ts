export default function draw(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    console.log('Unable to get context');
    return;
  }

  // Go wild.
}
