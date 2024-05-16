function fun(){
    var fname = "kartik";
    this.fname=fname;
}

var obj = new fun();
console.log(obj.fname);

//constructer functions : same as regular functions
/* there are two conventions though:
    1. they are name with first letter as capital
    2. they should be executed only with new keyword
*/

function User(name){
    if(!new.target){
        return new User(name);
    }
    else{
        this.name=name;
    }
}

let person = User("kartik");
console.log(person.name);