/**
 * Created by chase on 10/20/14.
 */
var radius = 2; //sets radius var
function circumference(r){ //the actual function
    calc = r * 3.14 * 2; //code for the calculation
    return calc; //could also have done just return r *2 *3.14
}
var circ = circumference(radius); //invokes function and assigns it to a var
console.log("The circumference is of the circle is " + circ);



var weight = 20; //sets vars
var stings = stung(weight); //sets var to whatever the function outputs also invokes function.
function stung(s){ //the function
    return s * 8.666667; //the equation
}
console.log("It takes " + stings + " bee stings to kill this animal."); //prints to console

/*
var stings = function(s){
if the above was an anonymous function
 */