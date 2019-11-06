// Многомерный массив с координатами
var coordArray = [
    [130,195],
    [19,158],
    [19,41],
    [130,5],
    [200,100]
    ];

let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
console.log(c)

//задаем размеры окна и канваса
let wx = window.innerWidth;
let wy = window.innerHeight;
canvas.width = wx;
canvas.height = wy;

// Функция, рисующая полигон из массива координат
function drawPoly(arr) {
    var canvas = c;
    canvas.beginPath(); // Начинаем отрисовку
    for (var i = 0; i < arr.length; i++) {
        if (i == 0) canvas.moveTo(arr[i][0], arr[i][1]); // Ставим точку на исходную позицию
        else canvas.lineTo(arr[i][0], arr[i][1]); // Рисуем линии от точки к точке
    }
    canvas.fillStyle = "rgba(255,128,128,0.5)"; // Задаем цвет заливки в формате RGBA
    canvas.fill(); // Зальем полученный многоугольник цветом
    }
    
function createArray() {
    
}
    
drawPoly(coordArray);

