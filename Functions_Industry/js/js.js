/**
 * Created by chase on 10/23/14.
 */
var sW = prompt("Enter the width of your screen in inches");
var sH = prompt("Enter the height of your screen in inches"); //gathers the area of screen specs from the user
var ppi = prompt("Enter screen resolution in PPI");
var area = function(x,y){ //anon func that calculates screen area
    if(isNaN(sW) || isNaN(sH)){ //checks using log op to see if you entered a number
        alert("you did not enter a number"); //if you didnt
    }else{ //if you did
       x = parseInt(sW); //converts what you entered to an actual number
       y = parseInt(sH);
       return x * y; //returns the value of sq inches to the var area()
    }
};
area(sW,sH); //invokes it
var areaP = function(c){
    if(isNaN(ppi)){
        alert("you did not enter a number")
    }else {
        c = parseInt(ppi);
        return c * c; //converts to number of pixels in one square inch
    }
};
areaP(ppi); //invoke
console.log("Your screen area is " + area() + " square inches, which is " + area() * areaP() + " pixels using your entered ppi of " + ppi + ".");