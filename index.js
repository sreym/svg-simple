'use strict';
// https://inkscape.org/ru/
// https://github.com/sreym/svg-simple
// http://svgjs.com/animating/
let draw;

async function loadFile(draw, file){
  let resp = await fetch(file);
  draw.svg(await resp.text());
}

async function main(){
  draw = SVG('drawing').size(500, 500);
  await loadFile(draw, 'drawing.svg');
  let rect;
  rect = draw.select('#rect1649').get(0);
  let r = {width: rect.width(), height: rect.height()};
  rect.mouseover(()=>rect.animate(1000, '<>', 0).size(r.width*1.1, r.height*1.1));
  rect.mouseout(()=>rect.animate(100, '<', 500).size(r.width, r.height)); 
  rect.click(()=>rect.animate().attr({fill: '#00ff00'}));
}

document.addEventListener('DOMContentLoaded', main);
