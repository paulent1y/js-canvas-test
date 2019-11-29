

function createCanvasInBody(id = "myDiv"){
    //создает див с id в переданном параметре, возвращает id
    let el = document.createElement("canvas");
    el.id = id;
    document.body.append(el);
    return el;  
}






