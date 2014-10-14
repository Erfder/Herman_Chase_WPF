/**
 * Created by chase on 10/14/14. Wacky Conditionals
 */
var fear = 0;
var hatBonus = 0;
var movies = 0;     //declaring and defining vars in these lines
var total;
function check() {     //starts function when the button is pushed
    if (document.getElementById("fear").value <= 4) {//checking the value of fear level. adjusts value of the var based on score. this line is for four or below
        fear += 10; //adds to the score on fear. lower numbers are a positive result, so score is higher for a lower value
    } else if (document.getElementById("fear").value >= 5 && document.getElementById("fear").value <= 8) { //if between 5 and 8
        fear += 5;
    } else if (document.getElementById("fear").value >= 9 && document.getElementById("fear").value <=10) { //if between 9 and 10
        fear += .33;
    } else {
        alert("You did not enter an appropriate value in at least one box");//this appears when a non-number appears
        return;//stops the function so that the other boxes are not still calculating score
    }
    if(document.getElementById("movies").value >= 10) {     //these do essentially the same as described above
        movies += 10;
    }else if(document.getElementById("movies").value >= 4 && document.getElementById("movies").value <= 9){
        movies += 5;
    }else if(document.getElementById("movies").value <= 3){
        movies += .5;
    }else{
        alert("You did not enter an appropriate value in at least one box");
        return;
    }
    if(document.getElementById("tinfoil").value == "yes"){  //if they entered yes
        hatBonus += 50;
    }else if(document.getElementById("tinfoil").value == "no"){ //if no
        hatBonus = 0;
    }else{      //if they entered anything other than yes or no
        alert("You did not enter an appropriate value in the third box. This is case sensitive, so \"yes\" (correct) is different than \"Yes\"");
        return;
    }
    total = fear * 3 + movies * 2 + hatBonus; //calculation of survival rate, multiples are to adjust to one-hundred with the appearance of a wide range of scores
    console.log("Your chance of survival is " + total + "%"); //log into console
    total = 0;
    fear = 0;       //all these reset the values so that you can retake the test without refreshing the page.
    movies = 0;     //otherwise the total score would stack onto the last score, and easily go above 100%
    hatBonus = 0;
}
