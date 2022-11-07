const ballButton = document.getElementById("button1");
const moveButton = document.getElementById("button2");
const workspace = document.getElementById("sim");
var clientHeight = document.getElementById('floor').clientHeight;

let amountOfObjects = 0;
let simIsRunning;
let gravity = 3;
let FPS = 15;

let xcord;
let ycord;
let bounce;
let velocity = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function makeObject(){
    simIsRunning = true
    workspace.innerHTML += `<div class="ball" id="object${amountOfObjects}"><div>`
    let testing = document.getElementById(`object0`)
    ycord = 500
    xcord = 500
    testing.style.bottom = `${ycord}px`
    testing.style.left =`${xcord}px`
    amountOfObjects++
}

function move(dt){
    x += vy * dt;
    y += vy * dt; 
}

async function moveObject(){
    while(simIsRunning === true){
    console.log("moveObject has been activateds")
    let testing = document.getElementById(`object0`);

    testing.style.bottom = `${ycord}px`;
    if(ycord > clientHeight+10){

        ycord -= gravity*2   
    }
    console.log(clientHeight)
    await sleep(1)
        if(ycord === clientHeight+10){
            
            bounce += fallen
        }
    }

}


console.log("sometihng")

ballButton.onclick = makeObject
moveButton.onclick = moveObject