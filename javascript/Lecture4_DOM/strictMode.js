//strict mode -> used to throw error when you use a variable without declaring it
//            -> can be used in function scope as well

"use strict";

sum=100;
var count =100;
console.log(count);

function add(){
    "use strict"
var a=10;
var b=20;
return a+b;

}