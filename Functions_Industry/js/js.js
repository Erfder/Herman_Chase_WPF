/**
 * Created by chase on 10/23/14.
 */
var sW = prompt("Enter the width of your screen");
var sH = prompt("Enter the height of your screen");
var ppi = prompt("Enter screen resolution in PPI");
var area = function(x,y){
    if(isNaN(sW) || isNaN(sH)){
        alert("you did not enter a number");
    }else{
       x = parseInt(sW);
       y = parseInt(sH);
       return x * y;
    }
};
area(sW,sH);
var areaP = function(c){
    if(isNaN(ppi)){
        alert("you did not enter a number")
    }else {
        c = parseInt(ppi);
        return c * c;
    }
};
areaP(ppi);
console.log("Your screen area is " + area() + " square inches, which is " + area() * areaP() + " pixels using your entered ppi of " + ppi + ".");