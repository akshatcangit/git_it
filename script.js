let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let inpSpeed = document.getElementById("newSpeed");
let startButton = document.getElementById("startSpin");
let stopButton = document.getElementById("stopSpin");
let value = document.getElementsByClassName("value");

let values = ['😍','😒','😁','😎','😃','😭','🥵'];

function random(){
    return values[Math.floor(Math.random()*7)];
}

let animationid;
function UpdateAnimation(speed){

    animationid = setInterval(function(){
        value1.innerText=random()
        value2.innerText=random()
        value3.innerText=random()
    },1000/speed);
}

$(document).ready(function () {
    $("#stopSpin").click(function() { 
        clearInterval(animationid);
        $(".value").css("animation-play-state","paused");  
    });
    $("#startSpin").click(function (e) { 
        $(".value").css("animation-play-state","running");
        
    });
});

inpSpeed.addEventListener('change',function(event){
    document.querySelector(':root').style.setProperty('--speed',event.target.value);

    UpdateAnimation(event.target.value);
})