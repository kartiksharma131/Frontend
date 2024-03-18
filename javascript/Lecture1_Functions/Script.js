function showAlert(){
    alert("hello world");
}

function sum(a,b){
    console.log(a+b);
}

function sum2(a,b){
    return a+b;
}

function variablelengthArgs(a,b){
    return a+b;
}


showAlert();
sum(5,7);
var sum = sum2(5,7);

//will return NaN
// if passing less no of args then Nan 
// if more no of args then extra args will be ignored
var ans = variablelengthArgs(10);