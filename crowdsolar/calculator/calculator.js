/* INT*/
var x= 28;  /* max. sun angle */
var aroof = 20 /* angle roof */
var rooflenght = 10;
var roofwidth = 5;
var l =1; //length of one solarcell
var w = 0.5; //width of one solarcell
/* Main*/
if (aroof > x){
document.writeln("No callulation necessary - shadow cast does not have to be considered");
}
else {

var diff = x-aroof;
document.writeln("add " + diff +" ° for perfect alignment - note the shadow");
var d =(l*Math.asin(diff* Math.PI/180)*Math.acos((aroof+x)* Math.PI/180))/Math.asin((aroof+x)* Math.PI/180)
document.writeln("distance between the modules (in m): "+ d + "<br>");



var nrooflenght = Math.floor(rooflenght/ (l+d))
var nroofwidth = Math.floor(roofwidth/ w);

document.write("nummer of solarcells in length: " +nrooflenght + "<br>");
document.write("nummer of solarcells in width: " +nroofwidth + "<br>");
var totalnofs = nrooflenght * nroofwidth;
document.write("total nummer of solarcells on this roof: "+ totalnofs);
}
