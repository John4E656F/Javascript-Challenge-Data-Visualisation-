import Chart from 'chart.js';

let div = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.id = 'canvas';
div.appendChild(canvas);
canvas.innerHTML = 'hello';

document.getElementById('firstHeading').appendChild(div, canvas);
console.log(canvas);