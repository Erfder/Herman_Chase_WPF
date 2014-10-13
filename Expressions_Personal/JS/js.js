/**
 * Created by chase on 10/9/14.
 */
var color = ["blue","red","yellow"];        //declaring string array
var q0 = prompt("how many tubes of "+color[0]+" do you have?");
var q1 = prompt("how many tubes of "+color[1]+" do you have?");         //declaring vars, particularly how many small tubes of paint I own. corresponds to array
var q2 = prompt("how many tubes of "+color[2]+" do you have?");
var feetPerTube = 5; //how many square feet of paint is in a tube. this is an average i suppose, as not many people readily know this quantity to enter it
var lengthCIn = prompt("how long is the canvas you wish to paint in inches?"); //declares length of Canvas in inches
var widthCIn = prompt("how wide is the canvas you wish to paint in inches?");  //width in inches
var areaCFt = lengthCIn * widthCIn / 144;   //converts to area in sq feet
var Can1 = q1 * feetPerTube / areaCFt;
var Can2 = q2 * feetPerTube / areaCFt;   //calculates how many canvases all the tubes of a certain color will fill
var Can0 = q0 * feetPerTube / areaCFt;
var allCan = Can0 + Can1 + Can2;      //calculates how many canvases all the paint together will fill
console.log("My " + color[0] + " paint will cover " + Can0 + " canvases, the " + color[1] + " paint will cover " + Can1 + " canvases, and the " + color[2] + " will cover "+ Can2 + " canvases, for a total of " + allCan + " painted canvases.");        //prints