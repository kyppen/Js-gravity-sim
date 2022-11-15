const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const resetBtn  = document.getElementById("reset");
const StartStop = document.getElementById("StartStop");
const testingBTN = document.getElementById("testing");
const blackHoleButton = document.getElementById("blackHoleBtn");
let sideBarUpdateButtons = document.getElementById("sideButtonDiv");
const blackHoleDiv = document.getElementById("blackHoleDiv")

let g = 0.05;
let fac = 1.001;
let radius = 20;
let color = "#0000ff";
let running = false;
let blackHoleON = false;



let x = 50;
let y = 50;
let vx = 2;
let vy = 0;

window.onload = init;

function init(){
    setInterval(update, 1000/60);
}

class sphere{
    constructor(x,y,radius, ax, ay, m,vx=0,vy=0){
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
}

function sidebarUpdate(){
    let updateThing = sideBarUpdateButtons.getElementsByTagName("button")
        for (let i = 0; i < updateThing.length; i++){
            if (i === 0){
                updateThing[i].innerHTML = `<p>Position X: ${vx.toFixed(3)}</p>`
            }if (i === 1){
                updateThing[i].innerHTML = `<p>Position Y: ${vx.toFixed(3)}</p>`
            }if (i === 2){
                updateThing[i].innerHTML = `<p>Velocity X: ${vx.toFixed(3)}</p>`
            }if (i === 3){
                updateThing[i].innerHTML = `<p>Velocity Y: ${vy.toFixed(3)}</p>`
            }if (i === 4){
                updateThing[i].innerHTML = `<p>Radius: ${radius.toFixed(3)}</p>`
            }if (i === 5){
                updateThing[i].innerHTML = `<p>Fac: ${fac.toFixed(3)}</p>`
            }if (i === 6){
                updateThing[i].innerHTML = `<p>Gravity: ${g.toFixed(3)}</p>`
            }
        }
}

function blackHole(){
    if (blackHoleON === false){
        blackHoleON = true
        blackHoleDiv.style.opacity = 1
        console.log("blackHoleON = true")
    }else{
        blackHoleON = false
        blackHoleDiv.style.opacity = 0
        console.log("blackHoleON = false")
    }
}


function update(){
    if (running === true){
        vy += g;
        vx += g/100;

        x += vx;
        y += vy;

        if (y > canvas.height - radius){
            y = canvas.height - radius;
            vy *= -fac;
            console.log("bounce")
            console.log(`YCord is: ${y}`)
            console.log(`XCord is: ${x}`)
        }
        if (y < radius){
            y = radius
            vy*= -fac;
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
        if(x <= blackHoleDiv.height){
            console.log("WHAOW")
        }
        if(y <= blackHoleDiv.height){
            console.log("WDSADASDSSA")
        }
        drawBall()
        sidebarUpdate();
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
testingBTN.onclick = sidebarUpdate
blackHoleButton.onclick = blackHole
