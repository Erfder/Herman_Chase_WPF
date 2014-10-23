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
    }
};
area(sW,sH);
var areaP = function(c,v){
    if(isNaN(ppi)){
        alert("you did not enter a number")
    }else {
        c = parseInt(ppi);
        return v * c * c;
    }
};
areaP(ppi,area());
console.log(area());