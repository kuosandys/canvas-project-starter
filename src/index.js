import './styles/main.css';

function initCanvas() {
  const canvas = document.getElementById('main-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return canvas;
}

function draw(canvas) {
  // eslint-disable-next-line no-unused-vars
  const ctx = canvas.getContext('2d');
  // Go wild.
}

function main() {
  const canvas = initCanvas();
  draw(canvas);
}

main();
