/**
 * Created by chase on 10/23/14.
 */
var an = prompt("Enter an animal you own. (or wish to own)");
var sW = prompt("Enter its weight when you got it in lbs. Even if it is a cat that weighs 2000 lbs.");
var weight = prompt("Enter its current weight.");
var food = prompt("Enter a food to feed the animal.");                          //all these ask for vars
var fW = prompt("Enter how much one serving of the food weighs in lbs.");
var serv = prompt("Enter the number of servings of that food you feed the animal.");
(isNaN(weight)) ? alert("you did not enter a number for current animal weight"): weight = parseInt(weight);
(isNaN(fW)) ? alert("you did not enter a number for food weight"): fW = parseInt(fW);       //all these check if vars are numbers
(isNaN(serv)) ? alert("you did not enter a number for the number of servings you have"): serv = parseInt(serv);
(isNaN(sW)) ? alert("you did not enter a number for the starting weight."): sW = parseInt(sW);
function feed(x,y,z,a){ //sets parameters
    return (x - a) / (z * y);       //uses vars to do a calculation
}
var gain = feed(weight,fW,serv,sW); //gives arguments
console.log("Your " +an+ " gains " + gain + " lbs every time you feed it " + food); //logs
