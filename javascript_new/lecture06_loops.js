var arr = [ 10,20,30,40,50];

//for loop
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//while loop
var i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

//do while loop
var i=0;
do{
    console.log(arr[i]);
    i++;
}while(i<arr.length)

//for each loop
arr.forEach(element => {
    console.log(element);
});

// for in loop
for(var element in arr){
    console.log(arr[element]);
}

// for of loop
for(var element of arr){
    console.log(element);
}