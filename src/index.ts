import './styles/main.css';
import draw from './draw';

function initCanvas(): HTMLCanvasElement {
  const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
  const minLength = 300;
  const padding = 10;
  const length =
    Math.max(Math.min(window.innerWidth, window.innerHeight), minLength) -
    2 * padding;
  canvas.width = length;
  canvas.height = length;
  return canvas;
}

function main() {
  draw(initCanvas());
}

main();
