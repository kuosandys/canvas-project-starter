import './styles/main.css';

function init() {
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function main() {
  init();
}

main();
