/**
 * Created by chase on 10/9/14.
 *
 *
 * the following is a calculation of space used up by quantities of media
 *///-----number of------
var numImages = 20;     //number of images
var numText = 20000;     //number of unicode characters
var nMinVideos = 5;     //number of minutes of video you have
// --- storage per number of ---
var image = 40000;       //4 bytes per pixel on 32 bit CMYK image of 100x100 pixels
var text = 2;            //2 bytes per unicode character on average
var video = 100000000;   //assuming 100MB per minute of video @ 720p and 17 mbps
//-----total space used calc-----
var total = numImages * image + numText * text + nMinVideos * video;
//----printing----
console.log(numImages +" small images, " + numText + " unicode characters, and "+ nMinVideos +" minutes of 720p video takes up about " +total+" bytes of space" );
