/**
 * Created by chase on 10/9/14.
 */
var userHp = 10;
var userDef = 2;
var userStr = 5;
var mobHp = 20;
var mobDef = 1;
var mobStr = 3;
var damage;
var userDamage;
damage = userStr - mobDef;
userDamage = mobStr - userDef;

function clickDamage(){
    if(mobHp > 0){
        mobHp-= damage;
        userHp -= userDamage;
        console.log("You hit the monster for " + damage + " damage! It now has " + mobHp + " Hp.");
        console.log("The monster hit you back for " + userDamage + " Hp! You now have " + userHp + " Hp.")
    }
    else{
        console.log("You defeated the monster!");
        document.getElementById('mob').style.display='none';
    }

}