// global scope
var name = "scope";
console.log(name);

// funciton scope
var i =10;
function scopeDemo(){
    var i =10;
    console.log(i);
}
scopeDemo();
console.log(i);