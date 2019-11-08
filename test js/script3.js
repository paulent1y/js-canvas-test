//пробуем нарисовать квадырат

const FRAME_DELAY = 17; //17 for 60 fps, 33 for 30 fps
const FIELD_ARRAY = []; // массив, хранящий принадлежность ячеек
const TILES_AMOUNT = 40; // количество ячеек на поле (по каждой из координат)
const FIELD_COLOR = randomColor();
const TILE_COLOR_N = "#9AF5A3";
const COLOR_P1 = "#788BF7";
const COLOR_P2 = "#E98968";

for (let i =0; i<TILES_AMOUNT;i++){
    FIELD_ARRAY.push([]);
    for (let j = 0; j<TILES_AMOUNT; j++)
        FIELD_ARRAY[i].push(0);
    //заполнение массива игровых клеток нулями
}


console.log(FIELD_ARRAY);

//стандартные настроечки размеров канваса
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let wx = window.innerWidth;
let wy = window.innerHeight;
canvas.width = wx;
canvas.height = wy;




function screenUpdate() {
    console.log(1);
    //эта функция вызывается в конце файла через SetInterval
    //задумана для обновления содержимого экрана
}

function drawGameField() {
    let xpos = wx/2;
    let ypos = wy/2;
    //ищем центр экрана(канваса)
    let fieldSide;

    //задаем сторону игрового поля по меньшей стороне, берем 80%
    if (wx<wy)
        fieldSide = Math.ceil(wx*0.8);
    else 
        fieldSide = Math.ceil(wy*0.8);
   
    //находим координаты x и y угловых точек игрового поля
    let fs = Math.ceil(fieldSide/2);
    let ax = Math.ceil(xpos-fs);
    let ay = Math.ceil(ypos-fs);
    let bx = Math.ceil(xpos+fs);
    let by = Math.ceil(ypos+fs);
    

    //начинаем размеренно и тупо рисовать поляну 
    //fillRect отказался работать, надо бы проверить его где то еще раз
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(ax,ay);
    ctx.lineTo(bx,ay);
    ctx.lineTo(bx,by);
    ctx.lineTo(ax,by);
    ctx.lineTo(ax,ay);
    ctx.fillStyle = FIELD_COLOR;
    ctx.fill()
    ctx.stroke();

    /*
    считаем размер одной игровой клетки 
    (делим поле на количество клеток и берем 95 процентов, 
    чтобы сделать отступ между ними)
    */
    let tileSize = Math.ceil((fieldSide / TILES_AMOUNT) * 80)/100;
    let tileFullSize = Math.ceil(((fieldSide / TILES_AMOUNT) * 100)/100);

    //вывод в консольку для отладки зачем я это пишу
    console.log(ax,ay,fs*2,fs*2);
    console.log(TILES_AMOUNT, tileSize, fieldSide);
    for (let i =0; i<TILES_AMOUNT;i++){
        for (let j = 0; j<TILES_AMOUNT; j++)
            {    
                temp = ((tileFullSize/2) - (tileSize/2));     
                ctx.fillStyle = TILE_COLOR_N;
                ctx.fillRect((ax + tileFullSize*j) ,
                            (ay + tileFullSize*i),
                            tileFullSize,
                            tileFullSize);



                ctx.strokeRect((ax + tileFullSize*j) ,
                            (ay + tileFullSize*i),
                            tileFullSize,
                            tileFullSize);
            }
    }
}


/*
рандомные цвета (вместо 250 поставил 150 для более мягких цветов)
можно попробовать добавить к цвету оффсет, 
чтобы не брались нижние пороги цветов
*/
function randomColor() { 
    return (
      "rgba(" +
      Math.round(Math.random() * 150) +
      "," +
      Math.round(Math.random() * 150) +
      "," +
      Math.round(Math.random() * 150) +
      "," +
      Math.ceil(Math.random() * 10) / 20 +
      ")"
    );
}



drawGameField(); // рисуем поле 
setInterval(screenUpdate, FRAME_DELAY); //задаем обновляшку экрана передавая фреймрейт
