const NUMBER_OF_TILES = 20;

let gamePage = document.getElementById('gamePage');
let div = document.createElement('div');

gamePage.append(div);
gamePage.style.width = `100%`;
gamePage.style.height = '100%';
gamePage.style.backgroundColor = '#ff0000';

let wx = window.innerWidth;
let wy = window.innerHeight;

if (wx<wy)
  fieldSide = Math.ceil(wx*0.8);
else 
  fieldSide = Math.ceil(wy*0.8);

let field = document.createElement('div');
field.classList.add('field');
field.style.position = "absolute";
field.style.width = fieldSide.toString() + "px";
field.style.height = fieldSide.toString() + "px";
field.style.backgroundColor = '#00ff00';
let xcenter = wx / 2;
let ycenter = wy / 2;
ax = xcenter - fieldSide/2;
ay = ycenter - fieldSide/2;
field.style.top = ay.toString() + "px";
field.style.left = ax.toString() + "px";
gamePage.append(field);
k = 0.85
let tileSize = fieldSide/NUMBER_OF_TILES;
let tileOffset = fieldSide/NUMBER_OF_TILES * (1-k);
let tilesArray = [];
pos = 0;
for (let i = 0; i < NUMBER_OF_TILES; i++){
  for (let j = 0; j < NUMBER_OF_TILES; j++) {
    let tile = document.createElement('div');
    tile.className = `tile${pos} i${i} j${j}`;
    tile.style.width = `${tileSize*k}px`;
    tile.style.height = `${tileSize*k}px`;
    tile.style.position = "absolute";
    tile.onmouseover = function(){this.style.backgroundColor = "#FF0000"};
    tile.onmouseout = function(){this.style.backgroundColor = "#0000ff"};
    console.log(i);
    tile.style.top = `${(tileSize)*i+tileOffset/2}px`;
    tile.style.left = `${(tileSize)*j+tileOffset/2}px`;
    tile.style.backgroundColor = "#0000ff";
    field.append(tile);
    tilesArray.push(tile);
    console.log(tile, pos, i); 
    pos++;
  }
}
