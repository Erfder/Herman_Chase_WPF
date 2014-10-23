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
    if(m > 0){
        if(m > 1){ //if m is 2+
            console.log("You are doing too many things in the morning. Procrastinate schoolwork until tomorrow or move something to another time in the day")
        }else{//if morning is 1
            if(a > 0){
                if(a > 1){
                    console.log("your afternoon is too busy.")
                }else{ //if morning and afternoon have 1 thing
                    if(n > 0){
                        if(n > 1){ //if night is overbooked
                            console.log("you are overbooked for night. Move a task to either morning or afternoon if possible")
                        }else{ //if afternoon, morning and night = 1
                            console.log("no schedule conflicts, but your day is very full.")
                        }
                    }else{  //if m = 1 a = 1 and night is free
                        console.log("no conflicts. you have the night to do whatever.")
                    }
                }
            }else{  //if afternoon = 0 m = 1
                if(n > 0){
                    if(n > 1){ //if night is overbooked
                        console.log("you are overbooked for night. Move a task to afternoon if possible")
                    }else{ //if afternoon is free, m = 1 and night = 1
                        console.log("no schedule conflicts. you are free in the afternoon only.")
                    }
                }else{  //if night is free
                    console.log("no conflicts. After morning you can do whatever.")
                }
            }
        }
    }else{  //if m is free
        if(a > 0){
            if(a > 1){ // m=0 a=2+
                console.log("You have too much in the afternoon. Move one thing to morning.")
            }else{ //m = 0 a = 1
                if(n > 0){
                    if(n > 1){ //if night is overbooked
                        console.log("you are overbooked for night. Move a task to morning if possible")
                    }else{ //if m = 0 a = 1 n = 1
                        console.log("no schedule conflicts, but your day is very full.")
                    }
                }else{  //if night is free
                    console.log("no conflicts. you only have to do something in the afternoon.")
                }
            }
        }else{  //if afternoon and morning = 0
            if(n > 0){
                if(n > 1){ //if night is overbooked
                    console.log("you are overbooked for night. Move all but one task to either morning or afternoon if possible")
                }else{ //if afternoon and morning are free but night has something
                    console.log("no schedule conflicts. You only have something at night, so goof off until then")
                }
            }else{  //if night is free
                console.log("you have literally all day to do whatever.")
            }
        }
    }
    m = 0;
    a = 0;  //resets everything so you can do it again without refreshing page
    n = 0;
}
