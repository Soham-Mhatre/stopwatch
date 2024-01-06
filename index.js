let date= new Date();

let start= document.getElementById("Start");
let pause= document.getElementById("Pause");
let reset= document.getElementById("Reset");
let clock= document.getElementById("clock");

let elaspedtime=0;
let hrs=0;
let mins=0;
let sec=0;
let paused=true;
let startTime=0;
let interval;


start.addEventListener("click",()=>{
    if(paused){
        paused=false;
        startTime=Date.now()-elaspedtime ;
        interval= setInterval(update,1000);
    }
})

pause.addEventListener("click",()=>{
    paused=true;
    elaspedtime= Date.now()- startTime;
    clearInterval(interval);
})

reset.addEventListener("click",()=>{
    paused=true;
    clearInterval(interval);
    elaspedtime=0;
    hrs=0;
    mins=0;
    sec=0;
    startTime=0;
    clock.textContent=`00:00:00`
})

function update(){
    elaspedtime = Date.now() - startTime;

    sec = Math.floor((elaspedtime/1000)%60) ;
    mins = Math.floor((elaspedtime/(1000*60))%60) ;
    hrs = Math.floor((elaspedtime/(1000*60*60))%60) ;

    sec=pad(sec);
    mins=pad(mins);
    hrs=pad(hrs);

    function pad(time){
        return ("0"+time).length >2 ? time:"0"+time
    } 
    clock.textContent=`${hrs}:${mins}:${sec}`
}

