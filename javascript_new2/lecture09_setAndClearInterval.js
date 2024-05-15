var interval = setInterval(fun,1000);

function fun(){
    console.log("hello");
}

setTimeout(()=>{
    clearInterval(interval);},10000);