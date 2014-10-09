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
mobHp -= damage;
userHp -= userDamage;

function imgRest() {

}
function clickDamage(){

}