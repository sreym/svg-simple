'use strict';
// http://svgjs.com/animating/
let draw;

async function loadFile(draw, file){
  let resp = await fetch(file);
  draw.svg(await resp.text());
}

async function main(){
  draw = SVG('drawing').size(500, 500);
  await loadFile(draw, 'drawing.svg');
  let rect = draw.select('#rect1649').get(0);
  let r = {width: rect.width(), height: rect.height()};
  rect.mouseover(()=>rect.animate(300, '<', 0).size(r.width*1.1, r.height*1.1));
  rect.mouseout(()=>rect.animate(100, '<', 0).size(r.width, r.height)); 
}

document.addEventListener('DOMContentLoaded', main);
