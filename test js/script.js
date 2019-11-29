class Ball {
  constructor() {
      this.color = randomColor();
      this.radius = Math.random() * 10 + 10;
      this.x = Math.random() * (wx - this.radius*2);
      this.y = Math.random() * (wy - this.radius*2);
      this.speed = Math.random() * 10 + 2;
  }
}

//дебажная функция
let logPrint = () => {
    console.log(mx, my);
    setTimeout(logPrint, 10)
}

//задаем канвас и режим рисования
let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
console.log(c)

//задаем размеры окна и канваса
let wx = window.innerWidth;
let wy = window.innerHeight;
canvas.width = wx;
canvas.height = wy;

//читка координат мыши
let mx = wx/2;
let my = wy/2;
console.log(`Mouse X ${mx} Mouse Y ${my}`);
addEventListener("mousemove", () => {
    mx = event.clientX;
    my = event.clientY;
    // c.clearRect(0,0,wx,wy)
    // drawCircles();
})

//выбор случайного цвета
function randomColor() {
    return (
      "rgba(" +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.ceil(Math.random() * 10) / 10 +
      ")"
    );
}

//рисовалка примитивов 
function drawCircles(amount) { 
  for (let i = 0; i< amount; i++) {
      c.beginPath(); //начало пути рисования
      c.fillStyle = randomColor(); // выбор цвета
      //дуга (х,у, r, начальный градус, конечный градус (в радианах что ли))
      c.arc(Math.random() * wx,
              Math.random() * wy,
              20 + Math.random() * 60,
              0,
              2 * Math.PI);
      c.fill();  //зарисовка внутри
      //c.stroke(); // зарисовка линией по контуру
  }
}

function drawRectangles(amount) { 
  for (let i = 0; i< amount; i++) {  
      // рисовалка прямоугольников
      c.fillStyle = randomColor();
      a = Math.random() * (0.5*wx);
      b = Math.random() * (0.5*wy);
      c.fillRect(a,b,a + Math.random() * 30,b + Math.random() * 30);
  }
}  

let character = new Ball;
console.log(character);

function drawHero() {
  c.beginPath(); 
  // c.fillStyle = character.color;
  c.fillStyle = '#FF0000' 
  c.arc(character.x,
          character.y,
          character.radius,
          0,
          2 * Math.PI);
  c.fill();  
}

function moveHero(x) {
  character.x += (mx-character.x) /character.speed/40*x;
  character.y += (my-character.y) /character.speed/40*x;


  // if (character.y > my)
  //   character.y--;
  // else if (character.y < my)
  //   character.y++
  // else {}

}


updateScreen();

function updateScreen () {
  c.clearRect(0,0,wx,wy);
  // drawCircles(20);
  // drawRectangles(20);
  
  initialDelay = 2;
  drawHero();
  moveHero(initialDelay);
  setTimeout(updateScreen, initialDelay); //17ms for 60 fps, 33ms for 30fps
}




























// let balls = [];
// for (let i =0; i<20; i++) {
//     balls.push(new Ball);
// }

// console.log(balls);

// function drawBall(a) {
//     c.beginPath();
//     c.arc(a.x, a.y, a.radius, 0, 2*Math.PI);
//     c.fillStyle = a.color;
//     c.fill();
// }

// for (i in balls) {
//     drawBall(i);
    
// }


