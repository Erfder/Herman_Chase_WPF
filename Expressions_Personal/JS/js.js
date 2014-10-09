/**
 * Created by chase on 10/9/14.
 */
var color = ["blue","red","yellow"];        //declaring string array
var q0 = 5;
var q1 = 6;         //declaring vars, particularly how many small tubes of paint I own. corresponds to array
var q2 = 3;
var feetPerTube = 5; //how many square feet of paint is in a tube
var lengthCIn = 12; //declares length of Canvas in inches
var widthCIn = 24;  //width in inches
var areaCFt = lengthCIn * widthCIn / 144;   //converts to area in sq feet
var redCan = q1 * feetPerTube / areaCFt;
var yelCan = q2 * feetPerTube / areaCFt;   //calculates how many canvases all the tubes of a certain color will fill
var bluCan = q0 * feetPerTube / areaCFt;
var allCan = redCan + yelCan + bluCan;      //calculates how many canvases all the paint together will fill
console.log("My " + color[0] + " paint will cover " + bluCan + " canvases, the " + color[1] + " paint will cover " + redCan + " canvases, and the " + color[2] + " will cover "+ yelCan + " canvases, for a total of " + allCan + " painted canvases.");