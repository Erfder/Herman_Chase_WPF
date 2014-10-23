/**
 * Created by chase on 10/23/14.
 */
var m = 0;
var a = 0;
var n = 0;
function resolve() {
    if (document.getElementById("syes").checked == true) {
        m++
    } else {
        m += 0
    }
    if (document.getElementById("wmorn").checked == true) {
        m++
    } else if (document.getElementById("waft").checked == true) {
        a++
    } else if (document.getElementById("wnit").checked == true) {
        n++
    } else {
        m += 0
    }
    if (document.getElementById("fmorn").checked == true) {
        m++
    } else if (document.getElementById("faft").checked == true) {
        a++
    } else if (document.getElementById("fnit").checked == true) {
        n++
    } else {
        m += 0
    }
    if (document.getElementById("omorn").checked == true) {
        m++
    } else if (document.getElementById("oaft").checked == true) {
        a++
    } else if (document.getElementById("onit").checked == true) {
        n++
    } else {
        m += 0
    }
    console.log(m,a,n);
}
