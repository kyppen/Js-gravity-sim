let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let resetBtn  = document.getElementById("reset");
let StartStop = document.getElementById("StartStop");

let g = 0.05;
let fac = 0.8;
let radius = 20;
let color = "#0000ff";
let running = false



let x = 50;
let y = 50;
let vx = 2;
let vy = 0;

window.onload = init;

function init(){
    setInterval(update, 1000/60);
}

class Balls{
    constructor(x,y,vx,vy){
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
}


function update(){
    if (running === true){
        vy += g;

        x += vx;
        y += vy;

        if (y > canvas.height - radius){
            y = canvas.height - radius;
            vy *= -fac;
            console.log("bounce")
            console.log(`YCord is: ${y}`)
            console.log(`XCord is: ${x}`)
        }
        if (x > canvas.width - radius){
            x = canvas.width - radius
            vx *= -fac;
            console.log("side bounce left")
            console.log(`XCord is: ${y}`)
            console.log(`XCord is: ${x}`)
        }
        //need to fix this.
        if(x < radius){
            console.log("right side bounce")
            x = radius
            vx *= -fac;
            console.log(`XCord is: ${y}`)
            console.log(`XCord is: ${x}`)   
        }
        drawBall();
    }
}

function drawBall(){
    with (context){
        clearRect(0,0, canvas.width, canvas.height);
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2*Math.PI, true);
        closePath();
        fill();  
    };
};

function resetBall(){
    x = 50;
    y = 50;
    vx = 2;
    vy = 0;
    console.log(Balls.x)
}

function changeButton(){
    if (running === false){
        StartStop.innerHTML = `Pause`
        running = true
        console.log("running === false ran")
    }else if (running === true){
        StartStop.innerHTML = `Start`
        running = false
        console.log("running === true ran")
        }

}

resetBtn.onclick = resetBall
StartStop.onclick = changeButton
