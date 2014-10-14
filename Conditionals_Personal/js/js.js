/**
 * Created by chase on 10/14/14. Personal Conditionals
 */
var hours;
var minutes;
var wakeh;
var wakem;
function start(){
    if(isNaN(document.getElementById("hours").value) == true) {
        alert("You did not enter a number");
        return;
    }else{
        hours = document.getElementById("hours").value
    }
    if(isNaN(document.getElementById("minutes").value) == true) {
        alert("You did not enter a number");
        return;
    }else if(document.getElementById("minutes").value > 60){
            alert("you did not enter a valid number of minutes")
    }else{
        minutes = document.getElementById("minutes").value
    }


    if(isNaN(document.getElementById("wakeh").value) == true){
        alert("You did not enter a number");
        return;

    }else{
        wakeh = document.getElementById("wakeh").value
    }
    if(isNaN(document.getElementById("wakem").value) == true){
        alert("You did not enter a number");
        return;
    }else if(document.getElementById("wakem").value > 60){
        alert("you did not enter a valid number of minutes")
    }else{
        wakem = document.getElementById("wakem").value
    }
    
    () ? : ;
}