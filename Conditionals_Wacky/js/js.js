/**
 * Created by chase on 10/14/14.
 */
var fear = 0;
var hatBonus = 0;
var movies = 0;
function check(){
    if(document.getElementById("fear").value <= 4){
        fear += 10
    }else if(document.getElementById("fear").value >= 5 && document.getElementById("fear").value <= 8) {
        fear += 5
    }else if(document.getElementById("fear").value >= 9){
        fear += .33
    }else{
        alert("you did not enter an appropriate value in the first box")
    }
    if(document.getElementById("movies").value >= 10) {
        movies += 10
    }else if(document.getElementById("movies").value >= 4 && document.getElementById("movies").value <= 9) {
        movies += 5
    }else if(document.getElementById("movies").value <= 3){
        movies += .5
    }else{
        alert("you did not enter an appropriate value in the second box")
    }
}