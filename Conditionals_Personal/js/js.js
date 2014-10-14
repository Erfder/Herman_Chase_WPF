/**
 * Created by chase on 10/14/14. Personal Conditionals
 */
var hours = 0;
var minutes = 0;
var wakeh = 0;
var wakem = 0;      //declares and defines all vars. = 0  was unnecessary but included for my own sanity
var timeE;
var timeW;
var timeR;
var poss;
function start(){   //starts function on button click
    if(isNaN(document.getElementById("hours").value) === true){ //checking to see if you entered a number
        alert("You did not enter a number");
        return; //tells you you didnt and stops all calculations
    }else{
        hours = parseInt(document.getElementById("hours").value); //parses what you entered to be a number
    }
    if(isNaN(document.getElementById("minutes").value) === true){
        alert("You did not enter a number");
        return;
    }else if(document.getElementById("minutes").value > 60){ //alerts you when it finds minutes over 60
        alert("you did not enter a valid number of minutes");
        return;
    }else{
        minutes = parseInt(document.getElementById("minutes").value);
        parseInt(minutes);
    }


    if(isNaN(document.getElementById("wakeh").value) === true){
        alert("You did not enter a number");
        return;
    }else{
        wakeh = parseInt(document.getElementById("wakeh").value);
        parseInt(wakeh);
    }
    if(isNaN(document.getElementById("wakem").value) === true){
        alert("You did not enter a number");
        return;
    }else if(document.getElementById("wakem").value > 60){
        alert("you did not enter a valid number of minutes");
        return;
    }else{
        wakem = parseInt(document.getElementById("wakem").value);
        parseInt(wakem);
    }
    timeE = hours + minutes / 60; //time expected in flat hours
    timeW = wakeh + wakem / 60; //time you woke up in flat hours
    timeR = 14 - timeW; //finds the amount of time between waking up and when I start work (at 2 pm).
    poss = (timeR >= timeE) ? "You have enough time to do this" : "You do not have enough time to do this"; //compares the time available to the time expected and set var to appropriate response
    console.log(poss); //logs that response
}

