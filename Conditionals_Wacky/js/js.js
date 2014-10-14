/**
 * Created by chase on 10/14/14.
 */
var fear = 0;
var hatBonus = 0;
var movies = 0;
function check(){
    if(document.getElementById("fear").value === ""){
        alert("you did not enter a value in the first box")
    }else if(document.getElementById("fear").value >= 6 && document.getElementById("fear").value <= 8){
        fear += 4
    }

}