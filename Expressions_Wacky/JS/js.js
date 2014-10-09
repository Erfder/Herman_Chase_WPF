/**
 * Created by chase on 10/9/14.
 */
var userHp = 10;
var userDef = 2;
var userStr = 5;
var mobHp = 20;     //these lines declare vars
var mobDef = 1;
var mobStr = 3;
var damage;
var userDamage;
damage = userStr - mobDef;
userDamage = mobStr - userDef;      //establishing vars and equations

function clickDamage(){             //function from the html on mouse down
    if(mobHp > 1){                  //if mobHp > 1 do the following
        mobHp-= damage;             //calculating damage
        userHp -= userDamage;
        console.log("You hit the monster for " + damage + " damage! It now has " + mobHp + " Hp.");     //printing
        console.log("The monster hit you back for " + userDamage + " Hp! You now have " + userHp + " Hp.")
    }
    else{
        console.log("You defeated the monster! +5 xp!");       //case where hp < 1
        document.getElementById('mob').style.display='none';    //print
    }

}