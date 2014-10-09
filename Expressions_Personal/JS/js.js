/**
 * Created by chase on 10/9/14.
 */
var color = ["blue","red","yellow"];        //declaring string array
var qB = 5;
var qR = 6;         //declaring vars, particularly how many small tubes of paint I own
var qY = 3;
var feetPerTube = 5; //how many square feet of paint is in a tube
var lengthCIn = 12; //declares length of Canvas in inches
var widthCIn = 24;  //width in inches
var areaCFt = lengthCIn * widthCIn / 144;   //converts to area in sq feet
var redCan = qR * feetPerTube / areaCFt;
var yelCan = qY * feetPerTube / areaCFt;   //calculates how many canvases all the tubes of a certain color will fill
var bluCan = qB * feetPerTube / areaCFt;
var allCan = redCan + yelCan + bluCan;      //calculates how many canvases all the paint together will fill