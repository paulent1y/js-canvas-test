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
let mx = 0;
let my = 0;
addEventListener("mousemove", () => {
    mx = event.clientX;
    my = event.clientY;
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
for (let i = 0; i< 1000; i++) {
    
    /* рисовалка прямоугольников
    c.fillRect(Math.random() * wx,
                Math.random() * wy,
                Math.random() * wx + Math.random() * 50, 
                Math.random() * wy + Math.random() * 50);
    */



   //рисовалка кругов
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



// class Ball {
//     constructor() {
//         this.color = randomColor();
//         this.radius = Math.random() * 20;
//         this.x = Math.random() * (wx - this.radius*2);
//         this.y = Math.random() * (wy - this.radius*2);

//     }
// }

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


