function sayHello(){
    console.log("hello");
}
sayHello();

function sayName(name){
    console.log("Hi ",name);
}
sayName("Kartik");



//function expression
let fun = function(){
    console.log("Having fun");
};
fun();

let sum =function(a,b){
    return a+b;
}
sum(1,2);

//arrow function
let sum2 =(a,b)=>{
    return a+b;
}
sum(1,2);
