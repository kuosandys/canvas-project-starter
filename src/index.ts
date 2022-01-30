import './styles/main.css';
import draw from './draw';

function initCanvas(): HTMLCanvasElement {
  const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
  const minLength = 300;
  const padding = 50;
  const length =
    Math.max(Math.min(window.innerWidth, window.innerHeight), minLength) -
    2 * padding;
  canvas.width = length;
  canvas.height = length;
  return canvas;
}

function main() {
  const canvas = initCanvas();

  const regenerateButton = document.getElementById('regenerate');
  regenerateButton?.addEventListener('click', () => draw(canvas));

  draw(canvas);
}

main();
