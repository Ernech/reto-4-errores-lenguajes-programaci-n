let canvas = document.getElementById("paint");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let curX, curY, prevX, prevY;
let hold = false;
ctx.lineWidth=2;
let fillValue = true;
let strokeValue = false;
let canvasData = {"pencil": [], "line": [], "rectangle": [], "circle": [], "eraser": []}

const pencil = ()=>{

    canvas.onmousedown = (e)=>{
        curX = e.clientX - canvas.offsetLeft;
        curY = e.clientY - canvas.offsetTop;
        hold = true;

        prevX = curX;
        prevY = curY;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
    }
    canvas.onmousemove = (e)=>{
        if(hold){
            curX = e.clientX - canvas.offsetLeft;
            curY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
    canvas.onmouseup=(e)=>{
        hold = false;
    }
    canvas.onmouseout=(e)=>{
        hold = false;
    }
    const draw =()=>{
        ctx.lineTo(curX, curY);
        ctx.stroke();
        canvasData.pencil.push({ "startx": prevX, "starty": prevY, "endx": curX, "endy": curY, "thick": ctx.lineWidth, "color": ctx.strokeStyle });
    }
}
