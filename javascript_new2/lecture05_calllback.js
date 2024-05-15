function fun(val){
    console.log(val);
}

function sum(a,b,callback){
    var ans = a+b;
    callback(ans);
}
sum(5,10,fun);