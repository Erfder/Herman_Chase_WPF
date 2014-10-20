/**
 * Created by chase on 10/20/14.
 */
circumference(radius); //invokes the function
var radius; //sets radius var
function circumference(r){ //the actual function
    calc = r * 3.14 * 2; //code for the calculation
    return calc;
}
var circ = circumference();
console.log("The circumference is of the circle is " + circ);