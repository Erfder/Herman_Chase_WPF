/**
 * Created by chase on 10/14/14. Industry conditionals
 */
var numWork;
var sales;
var eSales;
var dif;
var wage;
function process(){
    if(isNaN(document.getElementById("1").value) === true){
        alert("you did not enter a numerical value");
        return
    }else{
        eSales = parseFloat(document.getElementById("1").value)
    }
    if(isNaN(document.getElementById("2").value) === true){
        alert("you did not enter a numerical value");
        return
    }else{
        sales = parseFloat(document.getElementById("2").value)
    }
    if(isNaN(document.getElementById("P").value) === true){
        alert("you did not enter a numerical value");
        return
    }else{
        wage = parseFloat(document.getElementById("P").value)
    }
    if(isNaN(document.getElementById("N").value) === true){
        alert("you did not enter a numerical value");
    }else{
        numWork = parseInt(document.getElementById("N").value) * wage;
    }
    if(eSales < numWork){
        dif = (numWork - eSales) / wage;
        console.log("It would be a good idea to send " + parseInt(dif) + " or more employees on break.")
    }else if(eSales < sales){
        console.log("You should probably only send a few on break, if any.")
    }else{
        console.log("You should keep all your employees on the clock.")
    }
}