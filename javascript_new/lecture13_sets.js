let arr = [10,20,30,40,50];
console.log(arr);
const s = new Set([10, 20, 30, 40, 50, 30])
console.log(s);
var length=0;
for(let i of s){
    length++;
}
console.log(length);