var a=100;
/* constant and read only variable
    has to be assigned a value while initialization
    const variables are hoisted but const variables cannot be used until it is defined
*/
const c = 100

//will give error as const variables are hoisted but const variables cannot be used until it is defined
console.log(b);
const b = 10;


// let has a block scope
// let variables are hoisted but const variables cannot be used until it is defined

if(b <=10){
    let d =10;
}
else{
    let e =10;
}
console.log(b,d,e);



// for of loop
var arr=[1,2,3,4];

for(var i of arr){
    console.log(i);
}