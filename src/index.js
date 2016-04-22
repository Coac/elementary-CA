import CACanvas from './app/canvas/CACanvas';

let caCanvas = new CACanvas(document.getElementById('canvas'));

let fps = 30;
function draw() {
  setTimeout(function() {
    requestAnimationFrame(draw);
    caCanvas.clear();
    caCanvas.draw();
  }, 1000 / fps);
}

draw();
