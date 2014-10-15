/**
 * Created by chase on 10/14/14. Industry conditionals
 */
var numWork;
var sales;
var eSales;     //delcaring vars
var dif;
var wage;
function process(){ //function setup for button clicked
    if(isNaN(document.getElementById("1").value) === true){
        alert("you did not enter a numerical value");   //checks whether you entered anything and if it is a number. If not, it alerts you and stops calculations
        return; //the next three if statements are doing the same thing, so commenting all those is a little redundant
    }else{  //if they did enter a number
        eSales = parseFloat(document.getElementById("1").value);    //converts your string number into an actual number
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
        numWork = parseInt(document.getElementById("N").value) * wage; //this calculates th number of workers * their wage for labor cost
    }
    if(eSales < numWork){   //if the expected sales are less than the cost of labor
        dif = (numWork - eSales) / wage;    //finds the "exact" number of employees pulling the profit below labor. decimals could side one way or the other though
        console.log("It would be a good idea to send " + parseInt(dif) + " or more employees on break."); //log
    }else if(eSales < sales){   //if you sold more last hour, this hour doesn't need as many employees working. keeping the same number on the clock might lower profit, since you are spending the same amount and making less
        console.log("You should probably only send a few on break, if any.")
    }else{  //sales will be enough to make profit, and more people working moves product etc faster
        console.log("You should keep all your employees on the clock.")
    }
}