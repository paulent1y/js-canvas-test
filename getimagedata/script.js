document.addEventListener('DOMContentLoaded', () => {
    //задаем канвас и режим рисования
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    //задаем размеры окна и канваса
    let wx = window.innerWidth;
    let wy = window.innerHeight;
    canvas.width = wx;
    canvas.height = wy/2;


    let canvas2 = document.getElementById("canvas2");
    let ctx2 = canvas2.getContext("2d");
    let wx2 = window.innerWidth;
    let wy2 = window.innerHeight;
    canvas2.width = wx2;
    canvas2.height = wy2/2;

    var img = new Image();
    img.crossOrigin = "anonymous";
    // Загружаем файл изображения
    img.src = "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG";
    
    // ctx.drawImage(img, 0, 0);
    console.log(img)
    img.onload = function() {
        ctx.drawImage(img, 0, 0,wx,wy/2);
        getImage()
        function getImage(){
            for (let part = 0; part<20; part++){
                let size = wx/20
                let num = 0;
                let sum = [0,0,0,0];
                for (let i=part*size; i<(part+1)*size;i++)
                {
                    
                    let imgdt = ctx.getImageData(i,0,1,1)
                    num++;
                    sum[0] += imgdt.data[0]
                    sum[1] += imgdt.data[1]
                    sum[2] += imgdt.data[2]
                    sum[3] = imgdt.data[3]
                    // console.log(imgdt.data)
                }
                for (let i = 0; i< sum.length; i++)
                {
                    sum[i] = sum[i] / num;
                }
                for (let i = 0; i<10; i++){
                    let size = wx/20
                    ctx2.fillStyle = `rgba(${sum[0]},${sum[1]},${sum[2]})`
                    ctx2.fillRect(part*size,0,size,wy2)
                    console.log(sum)
                }
            }
        }
    };


    
    









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
});