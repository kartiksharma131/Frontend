let obj = {
    name:"kartik",
    age: 24,
    company: "ncr",
    fun: function(){
        console.log("i am function");
    },
    arr:["tom",'dick',"harry"]
};
console.log(obj.name);
console.log(obj[age]);
obj.fun();
console.log(obj.arr);
obj.key = "item";


for(var i in obj){
    console.log(i, obj[i]);
}