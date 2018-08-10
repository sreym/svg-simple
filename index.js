'use strict';
let draw;

async function loadFile(draw, file){
  let resp = await fetch(file);
  draw.svg(await resp.text());
}

async function main(){
  draw = SVG('drawing').size(500, 500);
  await loadFile(draw, 'drawing.svg');
}

document.addEventListener('DOMContentLoaded', main);
