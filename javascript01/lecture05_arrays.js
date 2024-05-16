let name=["john","jane","jimmy"];

console.log(name[0]);
for(var i in name){
    console.log(name[i]);
}

console.log(name.length);

name.push("cena");
name.unshift("undertaker");
console.log(name);

//name.splice(1);
//name.splice(1,2);
name.splice(1,0,"dhoni");
console.log(name);

name.forEach(element => {
    console.log(element);
});

let num1 = [10,20,25,35,40];
let num2 = [15,30,45,60,75];
/*console.log(num1.concat(num2));

console.log(num1.indexOf(20));

console.log(num1.reverse());

let a = num1.slice(1,4);
console.log(a);

console.log(typeof num1.toString());*/

num1.filter((val)=>{
    if(val>=10&& val<=25){
        console.log(val);
    }
})
