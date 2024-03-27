var student= {
    name:"Kartik",
    age:24,
    roll_no:14,
    phone:9873798723
};

for(var prop in student){
    console.log(prop,student[prop]);
}

var keys = Object.keys(student);
var keys2 = Object.getOwnPropertyNames(student);


// Nested objects

var profs = {
    name : {
        firstname: "kartik",
        Lastname:"sharma"
    },
    age:24,
    roll_no: 14
};


// for in loop

var array = [1,2,3,4];

for(var i in array){
    console.log(i);
}
