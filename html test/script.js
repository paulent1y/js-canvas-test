let gamePage = document.getElementById('gamePage');
let div = document.createElement('div');

gamePage.append(div);
gamePage.style.width = `100%`;
gamePage.style.height = '100%';
gamePage.style.backgroundColor = '#ff0000';
console.log(gamePage);
console.log(window.innerWidth);
console.log(window.innerHeight);

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
