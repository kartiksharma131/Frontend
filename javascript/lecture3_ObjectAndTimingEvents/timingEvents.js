function sayHello(){
    console.log("hello");
}

//setTimeout will execute the function after 2000 miliseconds and for once
setTimeout(sayHello,2000);

var count=1;
function sayHi(){
    if(count==5){
        clearInterval(id);
    }
    console.log(count);
    count++;

}
// if you want to execute repeatedly
 var id = setInterval(sayHello,5000);

var time=20;
 function countDown(){
    if(time==0){
        console.log("Time up");
        clearInterval(timer);
    }
    else{
        console.log(timer);
        timer--;
    }
 }

 var timer = setInterval(countDown,1000);

