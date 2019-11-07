// Многомерный массив с координатами
let coordArray = [[130,195],
    [19,158],
    [19,41],
    [130,5],
    [200,100]
    ];

document.getElementsByTagName('body')[0].innerHTML = `<div class="slidecontainer">
<input type="range" min="3" max="5000" value="5" class="slider" id="myRange" style = "width: 100%">
</div>` + document.getElementsByTagName('body')[0].innerHTML;
let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
//задаем размеры окна и канваса
let wx = window.innerWidth;
let wy = window.innerHeight;
canvas.width = wx;
canvas.height = wy;
let radius = (wx<wy) ? wx/3 : wy/3 ;
let offsetx = wx/2;
let offsety = wy/2;

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

    

function createPolyArray(n, arr) {
    let angle = 180 - (((n-2)/n) * 180)
    let currAngle = 0;
    for (let i = 0; i<n; i++)
    {   
        let xycoords = []
        currAngle+= angle;
        radAngle = currAngle / (180/Math.PI);
        xycoords.push(offsetx + Math.ceil(radius * Math.cos(radAngle)));
        xycoords.push(offsety + Math.ceil(radius * Math.sin(radAngle)));
        arr.push(xycoords);
    }
    console.log(arr);
    console.log(  `${Math.ceil((1 - (( (180*(n-2)) /n)  /  (180*(n-2)))) * 10000)/100} % закругленности`  );
}



let amount_of_angles = 5
let slider = document.getElementById('myRange');
slider.oninput = function() {
    let anotherArray = [];
    amount_of_angles = this.value;
    c.clearRect(0,0,wx,wy);
    createPolyArray(amount_of_angles,anotherArray)
    drawPoly(anotherArray);
} 

let anotherArray = [];
createPolyArray(amount_of_angles,anotherArray)
drawPoly(anotherArray);

