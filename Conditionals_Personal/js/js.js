/**
 * Created by chase on 10/14/14. Personal Conditionals
 */
var hours = 0;
var minutes = 0;
var wakeh = 0;
var wakem = 0;
var timeE;
var timeW;
var timeR;
function start(){
    if(isNaN(document.getElementById("hours").value) === true){
        alert("You did not enter a number");
        return;
    }else{
        hours = parseInt(document.getElementById("hours").value);
    }
    if(isNaN(document.getElementById("minutes").value) === true){
        alert("You did not enter a number");
        return;
    }else if(document.getElementById("minutes").value > 60){
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
    timeE = hours + minutes / 60;
    timeW = wakeh + wakem / 60;
    timeR = 14 - timeW;
    if(timeR >= timeE) {
        console.log("You have enough time to do this")
    }else{
        console.log("You do not have enough time to do this");
    }
}

