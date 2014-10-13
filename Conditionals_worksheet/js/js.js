/**
 * Created by chase on 10/13/14.
 */
var degrees = prompt("convert temperature from one scale to another. \nenter the number of degrees.");
var scale = prompt("enter \"C\" for celsius or \"F\" for Fahrenheit.");
//declaring and defining vars for user input for temperature and scale

if(scale === "C"){
    var tempF = degrees * 9 / 5 + 32;
    console.log(degrees + " degrees C is " + tempF + " degrees Fahrenheit");
    //checks to see if they entered Celsius to convert celsius to Fahrenheit

}else if (scale === "F"){
    var tempC = (degrees - 32) * 5 / 9;
    console.log(degrees + " degrees F is " + tempC + " degrees Celsius");
    //If they did not enter C but did enter F it converts f to c

}else{
    console.log("You did not enter \"C\" or \"F\"");
    //result if they pushed a wrong key
}


//group 2 check the login. This is very rudimentary for password security.
//declaring and defining userName and pass vars by user input
var userName = prompt("Enter desired username");
var pass = prompt("Enter desired Password");

//sets a function to run from the html button. if() checks for both correct. If Else() checks for a correct username but bad password, and else results from any other error (bad username)
function auth(){
    if(userName === document.getElementById("Username").value && pass === document.getElementById("Password").value){
        console.log("Welcome, " + userName);
    }else if(userName === document.getElementById("Username").value){
        console.log("Password does not match our records.");
    }else{
        console.log("User not found. Try again.")
    }
}
