/**
 * Created by chase on 10/23/14.
 */
var an = prompt("Enter an animal.");
var weight = prompt("Enter any weight for it in lbs. Even if it is a cat that weighs 2000 lbs.");
var food = prompt("Enter a food to feed the animal.");
var fW = prompt("Enter how much one serving of the food weighs in lbs.");
var serv = prompt("Enter the number of servings of that food you have.");
(isNaN(weight)) ? alert("you did not enter a number for animal weight"): weight = parseInt(weight);
(isNaN(fW)) ? alert("you did not enter a number for food weight"): fW = parseInt(fW);
(isNaN(serv)) ? alert("you did not enter a number for the number of servings you have"): serv = parseInt(serv);
function feed(x,y,z){
    
}
feed(weight,fW,serv);