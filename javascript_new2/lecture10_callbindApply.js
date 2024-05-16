var obj1={
    fname:"john",
    
}
function fun(age,gender){
    console.log(this.fname, age, gender);
}

var obj2={
    fname:"kenny"
}


// call
fun.call(obj1,12,"male");
fun.call(obj2,15,"female");

//apply
fun.apply(obj1,[12,"male"])
fun.apply(obj2,[15,"female"])

 //bind
 var a  = fun.bind(obj1,[12,"male"]);
 console.log(typeof a)