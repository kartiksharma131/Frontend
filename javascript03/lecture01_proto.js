var obj1={
    fname:"john"
}

var obj2={
    lname:"wich"
}

obj2.__proto__ = obj1;
console.log(obj2.fname);