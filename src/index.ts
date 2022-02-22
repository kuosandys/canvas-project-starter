import './styles/main.css';
import draw from './draw';
import { clear, sleep } from './utils/helpers';

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

async function handleInfinite(
  infiniteButton: HTMLElement,
  canvas: HTMLCanvasElement
) {
  infiniteButton.textContent =
    infiniteButton.textContent === 'infinite' ? 'stop' : 'infinite';
  while (infiniteButton.textContent === 'stop') {
    clear(canvas);
    draw(canvas);
    await sleep(50);
  }
}

function main() {
  const canvas = initCanvas();

  const regenerateButton = document.getElementById('regenerate');
  regenerateButton?.addEventListener('click', () => {
    clear(canvas);
    draw(canvas);
  });

  const infiniteButton = document.getElementById('infinite');
  infiniteButton?.addEventListener('click', () =>
    handleInfinite(infiniteButton, canvas)
  );

  draw(canvas);
}

main();
