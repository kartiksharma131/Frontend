// variable hoisting

function hoistDemo(){
    console.log(i);
    var i=10;
}
hoistDemo();

// function hoisting

FunctionhoistDemo();

function FunctionhoistDemo(){
    console.log(i);
    var i=10;
}