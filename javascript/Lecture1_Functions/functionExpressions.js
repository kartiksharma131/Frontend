
var ans = function fact(n){
    var fact=1;
    for(var i=1;i<=5;i++){
        fact = fact*i;
    }
    return fact;
};

// this cannot be done , will give an error
console.log(fact(5));

//correct way
console.log(ans(5));

//anonymous function
var ans2 = function (n){
    var fact=1;
    for(var i=1;i<=5;i++){
        fact = fact*i;
    }
    return fact;
};

console.log(ans2(5));


//passing functions as arguments

var factorial = function fact(n){
    var fact=1;
    for(var i=1;i<=5;i++){
        fact = fact*i;
    }
    return fact;
};
function NCR(n,r,fact){
    return fact(n)/fact(r)*fact(n-r);
}

NCR(5,3,factorial);