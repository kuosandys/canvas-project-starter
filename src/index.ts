import './styles/main.css';
import draw from './draw';

function initCanvas(): HTMLCanvasElement {
  const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return canvas;
}

function main() {
  draw(initCanvas());
}

main();
