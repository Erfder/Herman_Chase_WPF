/**
 * Created by chase on 10/8/14.
 */
var width;          //declaring width as a var
var length = 3;     //declaring length as a var and defining it. Done inconsistently to show understanding of shortcut
width = 5;          // defining width. Measurements are in inches
var area = length * width;      //showing calculation for declared area variable
console.log("The area of the rectangle is " + area + " inches^2");               //logging the area



var hAge = 3;           //Declaring human years in a variable
var dAge = hAge * 7;    // simultaneously declaring the variable dog age and the calculations for it
console.log("Sparky is " + hAge + " human years old, which is " + dAge + " in dog years");  //logging



var pSlices = 8;
var people = 46;    //in all three of these lines i declare and define slices per pizza (pslices),
var pizzas = 9;     // people at the party (people) and number of pizzas (pizzas).
var sPerson = pSlices * pizzas / people;    // calculating slices per person
console.log("Each person ate " + Math.round(sPerson * 100)/100 + " slices of pizza at the party.");  //printing result.
                    // Rounded the decimal to something "realistic" as 7+ decimal places is difficult for me to accept
                    // it multiplies 1.565.. by 100 to get 156.5, which rounds to 157. /100 to get back to decimal 1.57

var remainder2 = pSlices * pizzas - people * parseInt(sPerson);     //taking total # of slices and subtracting the
                                                                    //amount given to people (# of slices per
                                                                    //person * # of people)
console.log("Sparky got " + remainder2 + " slice(s) of pizza");     //printing
/*
I completely forgot about parseInt(). I wrote the code below before trying to figure out how to do it from
only the skills we have learned so far. I find the code below more useful, anyways, because the above doesn't
make sense for when there isn't enough slices for everyone to get at least one. Say for instance there are 10 people
and 1 pizza with 6 slices. Sparky would get all six. Rationally, it is not ok to order a pizza and decide to give
it all to the dog. You would first decide which four among you doesn't get/need one and the other six do.

var remainder = pSlices * pizzas - people;
if(Math.round(sPerson * 100)/100 > 1) {
    for (; remainder > people;) {          //checking to see if people get multiple slices, essentially
        remainder -= people;                 dividing out the number of slices among people on at a time
    }
    console.log("Sparky got " + remainder + " slice(s) of pizza");
}
else
    console.log("There were not enough whole slices of pizza for any leftovers");

*/

var shopBills = [215,325,178,249,301]; //sets an array
var total = shopBills[0] + shopBills[1] + shopBills[2] + shopBills[3] + shopBills[4]; //Summation of each week's bills
var average = total / 5;    //divided by 5 weeks
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week");


var oPrice = 55;    //original price
var dPerc = 15;     // discount percent
var desc = "sweater";   //description
var sTax = 6;       //sales tax percentage
var pbTax = oPrice * (1 - dPerc / 100);     //price before tax
var paTax = oPrice * (1 - dPerc / 100) * (1 + sTax / 100);      //price after tax
console.log("Your " + desc + " was originally $" + oPrice + ", but after a " + dPerc + "% discount, it is now $" + pbTax + " without tax and $" + paTax + " with tax.");