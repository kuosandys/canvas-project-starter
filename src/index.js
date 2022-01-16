import './styles/main.css';
import draw from './draw';

function initCanvas() {
  const canvas = document.getElementById('main-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return canvas;
}

function main() {
  draw(initCanvas());
}

main();
